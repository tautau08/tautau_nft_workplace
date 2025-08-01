import { useState, useEffect, useRef, useContext } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import { CreatorCard, NFTCard, Loader, SearchBar, Banner } from '../components';
import images from '../assets';
import { NFTContext } from '../context/NFTContext';
import { getTopMarketSellers } from '../utils/getTopCreators';
import { shortenAddress } from '../utils/shortenAddress';

const Home = () => {
  const { fetchNFTs, currentAccount } = useContext(NFTContext);
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const { theme } = useTheme();
  const [hideButtons, setHideButtons] = useState(false);
  const [scrollAmount, setScrollAmount] = useState(210);
  const [nfts, setNfts] = useState([]);
  const [activeSelect, setActiveSelect] = useState('Recently Added');
  const [isLoading, setIsLoading] = useState(true);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    fetchNFTs()
      .then((items) => {
        setNfts(items.reverse());
        setNftsCopy(items);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching NFTs:', error);
        setNfts([]);
        setNftsCopy([]);
        setIsLoading(false);
      });
  }, [currentAccount]);

  useEffect(() => {
    const sortedNfts = [...nfts];

    switch (activeSelect) {
      case 'Price (low to high)':
        setNfts(sortedNfts.sort((a, b) => a.price - b.price));
        break;
      case 'Price (high to low)':
        setNfts(sortedNfts.sort((a, b) => b.price - a.price));
        break;
      case 'Recently added':
        setNfts(sortedNfts.sort((a, b) => b.tokenId - a.tokenId));
        break;
      default:
        setNfts(nfts);
        break;
    }
  }, [activeSelect]);

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

  const handleScroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;
    if (current?.scrollWidth >= parent?.offsetWidth) {
      setHideButtons(false);
    } else {
      setHideButtons(true);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScrollAmount(window.innerWidth > 1800 ? 270 : 210);
      isScrollable();
      window.addEventListener('resize', isScrollable);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', isScrollable);
      }
    };
  });

  const topCreators = getTopMarketSellers(nfts);

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmid:w-4/5">
        <Banner
          name={<>Discover, collect and sell <br />Extraordinary NFTs!</>}
          childStyle="md:text-4xl sm:text-2xl xs:text-xl text-left"
          parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl "
        />

        {!isLoading && !nfts.length ? (
          <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
            That&apos;s weird... No NFTs for sale!
          </h1>
        ) : isLoading ? (
          <Loader />
        ) : (
          <>
            <div>
              <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
                Best Creators
              </h1>
            </div>

            <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
              <div className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none " ref={scrollRef}>
                {topCreators.map((creator, i) => (
                  <CreatorCard
                    key={creator.seller}
                    rank={i + 1}
                    creatorImage={images[`creator${i + 1}`]}
                    creatorName={shortenAddress(creator.seller)}
                    creatorEths={creator.sumall}
                  />
                ))}
                {!hideButtons && (
                  <>
                    <div onClick={() => handleScroll('left')} className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0">
                      <Image
                        src={images.left}
                        layout="fill"
                        objectFit="contain"
                        alt="left_arrow"
                        className={theme === 'light' ? 'filter invert' : undefined}
                      />
                    </div>

                    <div onClick={() => handleScroll('right')} className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0">
                      <Image
                        src={images.right}
                        layout="fill"
                        objectFit="contain"
                        alt="right_arrow"
                        className={theme === 'light' ? 'filter invert' : undefined}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-10">
              <div className="flexBetween mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start">
                <h1 className="flex-1 font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold  sm:mb-4">
                  Hot NFTs
                </h1>
                <div className="flex-2 sm:w-full flex flex-row sm:flex-col">
                  <SearchBar
                    activeSelect={activeSelect}
                    setActiveSelect={setActiveSelect}
                    handleSearch={onHandleSearch}
                    clearSearch={onClearSearch}
                  />
                </div>
              </div>
              <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center">
                {nfts.map((nft) => (
                  <NFTCard key={nft.tokenId} nft={nft} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
