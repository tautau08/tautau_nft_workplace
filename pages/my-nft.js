import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';

import { NFTContext } from '../context/NFTContext';
import { shortenAddress } from '../utils/shortenAddress';
import { Loader, NFTCard, Banner, SearchBar } from '../components';
import images from '../assets';

const MyNFTs = () => {
  const { fetchMyNFTsOrCreatedNFTs, currentAccount } = useContext(NFTContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSelect, setActiveSelect] = useState('Recently Added');

  useEffect(() => {
    if (!currentAccount) {
      setNfts([]);
      setNftsCopy([]);
      setIsLoading(false);
      return;
    }

    fetchMyNFTsOrCreatedNFTs('fetchMyNFTs')
      .then((items) => {
        setNfts(items || []);
        setNftsCopy(items || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setNfts([]);
        setNftsCopy([]);
        setIsLoading(false);
      });
  }, [currentAccount]);

  useEffect(() => {
    if (nftsCopy.length === 0) return;

    const sortedNfts = [...nftsCopy]; // ← Use nftsCopy instead

    switch (activeSelect) {
      case 'Price (low to high)':
        setNfts(sortedNfts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)));
        break;
      case 'Price (high to low)':
        setNfts(sortedNfts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)));
        break;
      case 'Recently Added':
        setNfts(sortedNfts.sort((a, b) => b.tokenId - a.tokenId));
        break;
      default:
        setNfts([...nftsCopy]);
        break;
    }
  }, [activeSelect, nftsCopy]);

  const onHandleSearch = (value) => {
    const filteredNfts = nfts.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()));

    if (filteredNfts.length === 0) {
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNfts);
    }
  };

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };

  if (isLoading) {
    return (
      <div className="flexCenter min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full flex justify-start items-center flex-col min-h-screen">
      <div className="w-full flexCenter flex-col">
        <Banner
          name="Your Nifty NFTs"
          childStyle="text-center mb-4"
          parentStyles="h-80 justify-center"
        />

        <div className="flexCenter flex-col -mt-20 z-0">
          <div className="flexCenter w-40 h-40 sm:w-36 sm:h-36 p-1 bg-nft-black-2 rounded-full">
            <Image src={images.creator1} className="rounded-full object-cover" objectFit="cover" />
          </div>
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-2xl mt-6">{shortenAddress(currentAccount)}</p>
        </div>
      </div>

      {(!isLoading && nfts.length === 0) ? (
        <div className="flexCenter sm:p-4 p-16">
          <h1 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-extrabold">No NFTs owned</h1>
        </div>
      ) : (
        <div className="sm:px-4 p-12 w-full minmd:w-4/5 flexCenter flex-col">
          <div className="flex-1 w-full flex flex-row sm:flex-col px-4 xs:px-0 minlg:px-8">
            <SearchBar activeSelect={activeSelect} setActiveSelect={setActiveSelect} handleSearch={onHandleSearch} clearSearch={onClearSearch} />
          </div>
          <div className="mt-3 w-full flex flex-wrap">
            {nfts.map((nft) => <NFTCard key={`nft-${nft.tokenId}`} nft={nft} onProfilePage />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyNFTs;
