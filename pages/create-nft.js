import { useState, useMemo, useCallback, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import { Button, Input, Loader } from '../components';
import images from '../assets';
import { NFTContext } from '../context/NFTContext';

const CreateNft = () => {
  const { theme } = useTheme();
  const [fileUrl, setfileUrl] = useState(null);
  const [formInput, setformInput] = useState({ price: '', name: '', description: '' });
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const { uploadToIPFS, createNft, currentAccount } = useContext(NFTContext);
  const router = useRouter();

  // Debug: Log context values
  useEffect(() => {
    console.log('Context values:', { uploadToIPFS, createNft, currentAccount });
  }, [uploadToIPFS, createNft, currentAccount]);

  const onDrop = useCallback(async (acceptedFile) => {
    try {
      setIsUploading(true);
      console.log('Uploading file:', acceptedFile[0]);
      const url = await uploadToIPFS(acceptedFile[0]);
      console.log('Upload result:', url);
      setfileUrl(url);
      setUploadedFile(acceptedFile[0]);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload file');
    } finally {
      setIsUploading(false);
    }
  }, [uploadToIPFS]);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 5000000,
  });

  const fileStyle = useMemo(() => (
    `dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed ${isDragActive ? 'border-file-active' : undefined}
    ${isDragAccept ? 'border-file-accept' : undefined}
    ${isDragReject ? 'border-file-reject' : undefined}`
  ), [isDragActive, isDragAccept, isDragReject]);

  const handleCreateNFT = async () => {
    console.log('Create NFT clicked');
    console.log('Form data:', { formInput, fileUrl, uploadedFile });

    // Validation
    if (!formInput.name || !formInput.description || !formInput.price) {
      alert('Please fill in all fields');
      return;
    }

    if (!fileUrl) {
      alert('Please upload an image first');
      return;
    }

    if (!currentAccount) {
      alert('Please connect your wallet');
      return;
    }

    try {
      setIsUploading(true);
      console.log('Calling createNft function...');
      await createNft(formInput, fileUrl, router, uploadedFile);
      console.log('NFT created successfully');
    } catch (error) {
      console.error('Error creating NFT:', error);
      alert('Failed to create NFT. Check console for details.');
    } finally {
      setIsUploading(false);
    }
  };

  useEffect(() => {
    if (!currentAccount) {
      router.push('/');
    }
  }, [currentAccount, router]);

  return (
    <div className="flex justify-center sm:px-4 p-12 ">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">Create new NFT</h1>
        <div className="mt-16">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl ">
            Upload Files
          </p>
          <div className="mt-4">
            <div {...getRootProps()} className={fileStyle}>
              <input {...getInputProps()} />
              <div className="flexCenter flex-col text-center">
                {isUploading ? (
                  <div className="flexCenter flex-col">
                    <Loader />
                    <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-lg mt-4">
                      Uploading to IPFS...
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">
                      JPG,PNG,GIF,SVG,WEBM Max 100mb
                    </p>
                    <div className="my-12 w-[50%] mx-auto flex justify-center">
                      <Image
                        src={images.upload}
                        width={100}
                        height={100}
                        objectFit="contain"
                        alt="file upload"
                        className={theme === 'light' ? 'filter invert' : undefined}
                      />
                    </div>
                    <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm">
                      Drag and Drop File
                    </p>
                    <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm mt-2 mb-4">
                      or Browse media on your device
                    </p>
                  </>
                )}
              </div>
              {fileUrl && (
                <aside>
                  <div>
                    <img src={fileUrl} alt="asset_file" />
                  </div>
                </aside>
              )}
            </div>
          </div>
        </div>
        <Input
          inputType="input"
          title="Name"
          placeholder="NFT Name"
          handleClick={(e) => setformInput({ ...formInput, name: e.target.value })}
        />
        <Input
          inputType="textarea"
          title="Description"
          placeholder="NFT Description"
          handleClick={(e) => setformInput({ ...formInput, description: e.target.value })}
        />
        <Input
          inputType="number"
          title="Price"
          placeholder="NFT Price"
          handleClick={(e) => setformInput({ ...formInput, price: e.target.value })}
        />
        <div className="mt-7 w-full flex justify-end ">
          <Button
            btnName={isUploading ? 'Listing...' : 'List NFT'} // ✅ Show loading text
            classStyle="rounded-xl"
            handleClick={handleCreateNFT}
            disabled={isUploading}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNft;
