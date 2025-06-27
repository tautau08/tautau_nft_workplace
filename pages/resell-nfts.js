import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import toast from 'react-hot-toast'; // ✅ Add this import

import { NFTContext } from '../context/NFTContext';
import { Button, Input, Loader } from '../components';

const ResellNFT = () => {
  const { processMarketplaceListing, isLoadingNFT } = useContext(NFTContext);
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // ✅ Add loading state
  const router = useRouter();
  const { id, tokenURI } = router.query;

  const fetchNFT = async () => {
    if (!tokenURI) return;

    try {
      const { data } = await axios.get(tokenURI);
      setPrice(data.price);
      setOriginalPrice(data.price);
      setImage(data.image);
    } catch (error) {
      console.error('Error fetching NFT:', error);
      toast.error('Failed to load NFT data'); // ✅ Add toast for fetch errors
    }
  };

  useEffect(() => {
    fetchNFT();
  }, [id]);

  // ✅ Replace your existing resell function with this:
  const resell = async () => {
    if (!price) {
      toast.error('Please enter a price');
      return;
    }

    // ✅ Simple price check with error message
    if (parseFloat(price) < parseFloat(originalPrice)) {
      toast.error(`Cannot sell below ${originalPrice} ETH`);
      return;
    }

    try {
      setIsLoading(true);
      await processMarketplaceListing(tokenURI, price, true, id);
      toast.success('NFT listed successfully!');
      router.push('/my-nft');
    } catch (error) {
      toast.error(error.message || 'Failed to list NFT');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoadingNFT) {
    return (
      <div className="flexCenter" style={{ height: '51vh' }}>
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-2xl">Resell NFT</h1>

        <Input
          inputType="number"
          title="Price"
          placeholder="Asset Price"
          handleClick={(e) => setPrice(e.target.value)}
        />

        {image && <img className="rounded mt-4" width="350" src={image} />}

        <div className="mt-7 w-full flex justify-end">
          <Button
            btnName={isLoading ? 'Listing...' : 'List NFT'} // ✅ Show loading text
            classStyle="rounded-xl"
            handleClick={resell}
            disabled={isLoading} // ✅ Disable button while loading
          />
        </div>
      </div>
    </div>
  );
};

export default ResellNFT;
