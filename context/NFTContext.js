import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import axios from 'axios';
import { MarketAddress, MarketAddressABI } from './constants';

const PINATA_API_KEY = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY;
const fetchContract = (signerOrProvider) => new ethers.Contract(MarketAddress, MarketAddressABI, signerOrProvider);
export const NFTContext = React.createContext();

export const NFTProvider = ({ children }) => {
  const nftCurrency = 'ETH';
  const [currentAccount, setCurrentAccount] = useState('');
  const [isLoadingNFT, setIsLoadingNFT] = useState(false);
  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return alert('Please install MetaMask');
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    } else {
      console.log('No accounts found!');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) return alert('Please install MetaMask');
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setCurrentAccount(accounts[0]);
    window.location.reload();
  };

  const uploadToIPFS = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
        method: 'POST',
        headers: {
          pinata_api_key: PINATA_API_KEY,
          pinata_secret_api_key: PINATA_SECRET_API_KEY,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      const url = `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`;
      return url;
    } catch (error) {
      console.error('Error uploading file to Pinata:', error);
      return null;
    }
  };

  const processMarketplaceListing = async (url, formInputPrice, isReselling, id) => {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const price = ethers.utils.parseUnits(formInputPrice, 'ether');
    const contract = fetchContract(signer);

    // ✅ Add validation for reselling
    if (isReselling && id) {
      try {
      // Get user's NFTs to find the original purchase price
        const userNFTs = await fetchMyNFTsOrCreatedNFTs('fetchMyNFTs');
        const targetNFT = userNFTs.find((nft) => nft.tokenId.toString() === id.toString());

        if (targetNFT) {
          const originalPrice = parseFloat(targetNFT.price);
          const newPrice = parseFloat(formInputPrice);

          // Check if new price is less than original price
          if (newPrice < originalPrice) {
            throw new Error(`Cannot list below purchase price. You bought this NFT for ${originalPrice} ETH. Minimum listing price: ${originalPrice} ETH`);
          }
        }
      } catch (error) {
        console.error('Price validation error:', error);
        throw error; // Re-throw to be caught by the calling component
      }
    }

    const listingPrice = await contract.getListingPrice();

    const transaction = !isReselling
      ? await contract.createToken(url, price, { value: listingPrice.toString() })
      : await contract.resellToken(id, price, { value: listingPrice.toString() });

    await transaction.wait();
  };

  const createNft = async (formInput, fileURL, router) => {
    const { name, description, price } = formInput;
    if (!name || !description || !price || !fileURL) return;

    const data = JSON.stringify({ name, description, image: fileURL });

    try {
    // Upload metadata (JSON) to IPFS, not the file again
      const response = await fetch('https://api.pinata.cloud/pinning/pinJSONToIPFS', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          pinata_api_key: PINATA_API_KEY,
          pinata_secret_api_key: PINATA_SECRET_API_KEY,
        },
        body: data,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      const metadataURL = `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`;

      // Create the NFT with metadata URL
      await processMarketplaceListing(metadataURL, price);

      router.push('/');
    } catch (error) {
      console.log(error);
      console.error('Error creating NFT:', error);
    }
  };

  const fetchNFTs = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');
      const contract = fetchContract(provider);

      const data = await contract.fetchMarket();

      const items = await Promise.all(data.map(async ({ tokenId, seller, owner, price: unformattedPrice }) => {
        const tokenURI = await contract.tokenURI(tokenId);
        const { data: { image, name, description } } = await axios.get(tokenURI);

        // Convert BigNumber to readable string
        const price = ethers.utils.formatEther(unformattedPrice.toString());

        return {
          price: parseFloat(price).toFixed(4), // Convert to number then back to fixed decimal string
          tokenId: tokenId.toNumber(),
          seller,
          owner,
          image,
          name,
          description,
          tokenURI,
        };
      }));

      return items;
    } catch (error) {
      console.error('Error in fetchNFTs:', error);
      return [];
    }
  };

  const fetchMyNFTsOrCreatedNFTs = async (type) => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(signer);

    const data = type === 'fetchItemsListed' ? await contract.fetchItemsListed() : await contract.fetchMyNFTs();

    const items = await Promise.all(data.map(async ({ tokenId, seller, owner, price: unformattedPrice }) => {
      const tokenURI = await contract.tokenURI(tokenId);
      const { data: { image, name, description } } = await axios.get(tokenURI);

      // Convert BigNumber to readable string
      const price = ethers.utils.formatEther(unformattedPrice.toString());

      return {
        price: parseFloat(price).toFixed(4), // Convert to number then back to fixed decimal string
        tokenId: tokenId.toNumber(),
        seller,
        owner,
        image,
        name,
        description,
        tokenURI,
      };
    }));

    return items;
  };

  const purchaseNFT = async (nft) => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(MarketAddress, MarketAddressABI, signer);

    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');
    const transaction = await contract.createMarketSale(nft.tokenId, { value: price });
    setIsLoadingNFT(true);
    await transaction.wait();
    setIsLoadingNFT(false);
  };

  return (
    <NFTContext.Provider value={{ nftCurrency, connectWallet, currentAccount, uploadToIPFS, createNft, fetchNFTs, fetchMyNFTsOrCreatedNFTs, purchaseNFT, processMarketplaceListing, isLoadingNFT }}>
      {children}
    </NFTContext.Provider>
  );
};
