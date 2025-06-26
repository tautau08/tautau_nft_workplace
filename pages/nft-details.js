import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { NFTContext } from '../context/NFTContext';
import { shortenAddress } from '../utils/shortenAddress';
import { Button, Loader, Modal } from '../components';
import images from '../assets';

const PaymentBodyCmp = ({ nft, nftCurrency }) => (
  <div className="flex flex-col">
    <div className="flexBetween">
      <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base minlg:text-xl">Item</p>
      <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base minlg:text-xl">Subtotal</p>
    </div>

    <div className="flexBetweenStart my-5">
      <div className="flex-1 flexStartCenter">
        <div className="relative w-28 h-28">
          <Image src={nft.image || images[`nft${nft.i}`]} layout="fill" objectFit="cover" />
        </div>
        <div className="flexCenterStart flex-col ml-5">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-xl">{shortenAddress(nft.seller)}</p>
          <p className="font-poppins dark:text-white text-nft-black-1 text-sm minlg:text-xl font-normal">{nft.name}</p>
        </div>
      </div>

      <div>
        <p className="font-poppins dark:text-white text-nft-black-1 text-sm minlg:text-xl font-normal">{nft.price} <span className="font-semibold">{nftCurrency}</span></p>
      </div>
    </div>

    <div className="flexBetween mt-10">
      <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base minlg:text-xl">Total</p>
      <p className="font-poppins dark:text-white text-nft-black-1 text-base minlg:text-xl font-normal">{nft.price} <span className="font-semibold">{nftCurrency}</span></p>
    </div>
  </div>
);

const AssetDetails = () => {
  const { nftCurrency, buyNft, currentAccount, isLoadingNFT } = useContext(NFTContext);
  const [nft, setNft] = useState({ image: '', itemId: '', name: '', owner: '', price: '', seller: '' });
  const [paymentModal, setPaymentModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // disable body scroll when navbar is open
    if (paymentModal || successModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [paymentModal, successModal]);

  useEffect(() => {
    if (!router.isReady) return;

    setNft(router.query);

    setIsLoading(false);
  }, [router.isReady]);

  const checkout = async () => {
    await buyNft(nft);

    setPaymentModal(false);
    setSuccessModal(true);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="relative flex justify-center lg:flex-col xl:flex-row min-h-screen">
      {/* Image Section - Fixed for iPad */}
      <div className="relative flex-1 flexCenter sm:px-4 p-4 md:p-8 lg:p-12 border-r lg:border-r-0 lg:border-b xl:border-r xl:border-b-0 dark:border-nft-black-1 border-nft-gray-1">
        <div className="relative w-full max-w-lg mx-auto aspect-square lg:max-w-xl xl:max-w-lg">
          <Image
            src={nft.image || images[`nft${nft.i}`]}
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-lg"
            alt={nft.name || 'NFT Image'}
          />
        </div>
        {/* Content Section - Fixed for iPad */}
        <div className="flex-1 justify-start sm:px-4 p-4 md:p-8 lg:p-12 sm:pb-4 max-w-2xl xl:max-w-none">
          <div className="flex flex-row sm:flex-col">
            <h2 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl md:text-2xl lg:text-3xl">{nft.name}</h2>
          </div>

          <div className="mt-6 md:mt-10">
            <p className="font-poppins dark:text-white text-nft-black-1 font-bold text-sm md:text-base mb-2">Creator</p>
            <div className="flex flex-row items-center mt-3">
              <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mr-2">
                <Image src={images.creator1} layout="fill" objectFit="cover" className="rounded-full" />
              </div>
              <p className="font-poppins dark:text-white text-nft-black-1 text-sm md:text-base lg:text-lg font-medium">{shortenAddress(nft.seller)}</p>
            </div>
          </div>

          <div className="mt-6 md:mt-10 flex flex-col">
            <div className="w-full border-b dark:border-nft-black-1 border-nft-gray-1 flex flex-row">
              <p className="font-poppins dark:text-white text-nft-black-1 font-bold text-sm md:text-base mb-2">Details</p>
            </div>
            <div className="mt-3">
              <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-sm md:text-base leading-relaxed">
                {nft.description}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col">
            <div className="w-full border-b dark:border-nft-black-1 border-nft-gray-1 flex flex-row">
              <p className="font-poppins dark:text-white text-nft-black-1 font-bold text-sm md:text-base mb-2">Price</p>
            </div>
            <div className="mt-3">
              <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-sm md:text-base leading-relaxed">
                {nft.price} <span className="font-medium">{nftCurrency}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-row sm:flex-col mt-6 md:mt-10">
            {currentAccount === nft.seller.toLowerCase()
              ? (
                <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-sm md:text-base border border-gray p-3 rounded-lg">
                  You cannot buy your own NFT
                </p>
              )
              : currentAccount === nft.owner.toLowerCase()
                ? (
                  <Button
                    btnName="List on Marketplace"
                    btnType="primary"
                    classStyle="mr-5 sm:mr-0 sm:mb-5 rounded-xl md:w-auto"
                    handleClick={() => router.push(`/resell-nfts?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`)}
                  />
                )
                : (
                  <Button
                    btnName={`Buy for ${nft.price} ${nftCurrency}`}
                    btnType="primary"
                    classStyle="mr-5 sm:mr-0 sm:mb-5 rounded-xl  md:w-auto"
                    handleClick={() => setPaymentModal(true)}
                  />
                )}
          </div>
        </div>
      </div>

      {paymentModal && (
        <Modal
          header="Check Out"
          body={<PaymentBodyCmp nft={nft} nftCurrency={nftCurrency} />}
          footer={(
            <div className="flex flex-row sm:flex-col">
              <Button
                btnName="Checkout"
                btnType="primary"
                classStyle="mr-5 sm:mr-0 sm:mb-5 rounded-xl"
                handleClick={checkout}
              />
              <Button
                btnName="Cancel"
                btnType="outline"
                classStyle="rounded-lg"
                handleClick={() => setPaymentModal(false)}
              />
            </div>
          )}
          handleClose={() => setPaymentModal(false)}
        />
      )}

      {isLoadingNFT && (
        <Modal
          header="Buying NFT..."
          body={(
            <div className="flexCenter flex-col text-center">
              <div className="relative w-52 h-52">
                <Loader />
              </div>
            </div>
          )}
          handleClose={() => setSuccessModal(false)}
        />
      )}

      {successModal && (
        <Modal
          header="Payment Successful"
          body={(
            <div className="flexCenter flex-col text-center" onClick={() => setSuccessModal(false)}>
              <div className="relative w-52 h-52">
                <Image src={nft.image || images[`nft${nft.i}`]} objectFit="cover" layout="fill" />
              </div>
              <p className="font-poppins dark:text-white text-nft-black-1 text-sm minlg:text-xl font-normal mt-10"> You successfully purchased <span className="font-semibold">{nft.name}</span> from <span className="font-semibold">{shortenAddress(nft.seller)}</span>.</p>
            </div>
          )}
          footer={(
            <div className="flexCenter flex-col">
              <Button
                btnName="Check it out"
                btnType="primary"
                classStyle="sm:mr-0 sm:mb-5 rounded-xl"
                handleClick={() => {
                  setSuccessModal(false);
                  // Force a complete navigation with refresh
                  router.push('/my-nft');
                }}
              />
            </div>
          )}
          handleClose={() => setSuccessModal(false)}
        />
      )}
    </div>
  );
};

export default AssetDetails;
