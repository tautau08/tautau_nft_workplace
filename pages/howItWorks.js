import { Banner } from '../components';

const HowItWorks = () => (
  <div className="w-full flex justify-start items-center flex-col min-h-screen">
    <div className="w-full flexCenter flex-col">
      <Banner
        name="How CrypTau Works"
        childStyle="text-center mb-4"
        parentStyles="h-80 justify-center"
      />
    </div>

    <div className="sm:px-4 p-12 w-full minmd:w-4/5 flexCenter flex-col">
      <div className="w-full flex flex-col max-w-4xl">

        {/* Introduction */}
        <div className="mb-12">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-bold mb-6">Getting Started with CrypTau</h2>
          <p className="font-poppins dark:text-white text-nft-black-1 text-lg leading-8 mb-4">
            CrypTau makes it easy to create, buy, and sell NFTs on the blockchain. Follow our step-by-step guide
            to start your NFT journey today.
          </p>
          <p className="font-poppins dark:text-white text-nft-black-1 text-lg leading-8">
            Whether you're an artist looking to showcase your work or a collector seeking unique digital assets,
            our platform provides all the tools you need.
          </p>
        </div>

        {/* Step by Step Guide */}
        <div className="mb-12">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-bold mb-6">Step-by-Step Guide</h2>
          <div className="space-y-8">

            {/* Step 1 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-nft-red-violet rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <div className="flex-1">
                <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">Connect Your Wallet</h3>
                <p className="font-poppins dark:text-white text-nft-black-1 text-base leading-6 mb-3">
                  Install MetaMask or another compatible Ethereum wallet. Click the "Connect Wallet" button
                  in the top navigation to link your wallet to CrypTau.
                </p>
                <div className="bg-white dark:bg-nft-black-2 p-4 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
                  <p className="font-poppins dark:text-white text-nft-black-1 text-sm">
                    💡 <strong>Tip:</strong> Make sure you have some ETH in your wallet for transaction fees (gas).
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-nft-red-violet rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <div className="flex-1">
                <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">Browse NFTs</h3>
                <p className="font-poppins dark:text-white text-nft-black-1 text-base leading-6 mb-3">
                  Explore our marketplace to discover amazing NFTs. Use the search and filter features
                  to find specific collections, price ranges, or categories.
                </p>
                <div className="bg-white dark:bg-nft-black-2 p-4 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
                  <p className="font-poppins dark:text-white text-nft-black-1 text-sm">
                    🔍 <strong>Features:</strong> Sort by price, date, popularity, or use advanced filters.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-nft-red-violet rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <div className="flex-1">
                <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">Buy an NFT</h3>
                <p className="font-poppins dark:text-white text-nft-black-1 text-base leading-6 mb-3">
                  Found something you love? Click on the NFT to view details, then click "Buy Now"
                  to purchase it instantly, or place a bid if it's an auction.
                </p>
                <div className="bg-white dark:bg-nft-black-2 p-4 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
                  <p className="font-poppins dark:text-white text-nft-black-1 text-sm">
                    💰 <strong>Payment:</strong> All transactions are processed securely on the blockchain.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* For Creators */}
        <div className="mb-12">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-bold mb-6">For NFT Creators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
              <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">🎨 Create NFT</h3>
              <p className="font-poppins dark:text-white text-nft-black-1 text-base leading-6 mb-3">
                Upload your digital artwork, add metadata like title and description, set your price, and mint your NFT.
              </p>
              <ul className="font-poppins dark:text-white text-nft-black-1 text-sm space-y-1">
                <li>• Supported formats: JPG, PNG, GIF, MP4</li>
                <li>• Maximum file size: 100MB</li>
                <li>• Stored securely on IPFS</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
              <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">💎 Set Properties</h3>
              <p className="font-poppins dark:text-white text-nft-black-1 text-base leading-6 mb-3">
                Add unique traits and properties to make your NFT stand out. Set rarity levels and special attributes.
              </p>
              <ul className="font-poppins dark:text-white text-nft-black-1 text-sm space-y-1">
                <li>• Custom properties and traits</li>
                <li>• Rarity percentages</li>
                <li>• Unlockable content</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
              <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">💰 List for Sale</h3>
              <p className="font-poppins dark:text-white text-nft-black-1 text-base leading-6 mb-3">
                Choose between fixed price sales or auction-style listings. Set your desired price and duration.
              </p>
              <ul className="font-poppins dark:text-white text-nft-black-1 text-sm space-y-1">
                <li>• Fixed price listings</li>
                <li>• Timed auctions</li>
                <li>• Royalty settings</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Transaction Process */}
        <div className="mb-12">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-bold mb-6">Understanding Transactions</h2>
          <div className="space-y-6">

            <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
              <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-4">🔄 How Blockchain Transactions Work</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="text-lg">⚡</span>
                  <div>
                    <h4 className="font-poppins dark:text-white text-nft-black-1 text-lg font-semibold mb-1">Gas Fees</h4>
                    <p className="font-poppins dark:text-white text-nft-black-1 text-base">
                      Small fees paid to process transactions on the Ethereum network. Fees vary based on network congestion.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-lg">📃</span>
                  <div>
                    <h4 className="font-poppins dark:text-white text-nft-black-1 text-lg font-semibold mb-1">Listing Fees</h4>
                    <p className="font-poppins dark:text-white text-nft-black-1 text-base">
                      Sellers are required to pay a listing fee of 0.025 ETH for each NFT they put up for sale on the marketplace.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-lg">⏱️</span>
                  <div>
                    <h4 className="font-poppins dark:text-white text-nft-black-1 text-lg font-semibold mb-1">Confirmation Time</h4>
                    <p className="font-poppins dark:text-white text-nft-black-1 text-base">
                      Transactions typically confirm within 1-3 minutes, depending on network conditions and gas price.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-lg">🔒</span>
                  <div>
                    <h4 className="font-poppins dark:text-white text-nft-black-1 text-lg font-semibold mb-1">Security</h4>
                    <p className="font-poppins dark:text-white text-nft-black-1 text-base">
                      All transactions are secured by Ethereum's blockchain technology and cannot be reversed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Tips for Success */}
        <div className="mb-12">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-bold mb-6">Tips for Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="space-y-4">
              <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">For Buyers 🛒</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-sm mt-1">✅</span>
                  <p className="font-poppins dark:text-white text-nft-black-1 text-base">Research the creator and collection history</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sm mt-1">✅</span>
                  <p className="font-poppins dark:text-white text-nft-black-1 text-base">Check rarity and unique properties</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sm mt-1">✅</span>
                  <p className="font-poppins dark:text-white text-nft-black-1 text-base">Verify authenticity and ownership</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sm mt-1">✅</span>
                  <p className="font-poppins dark:text-white text-nft-black-1 text-base">Consider long-term value potential</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">For Sellers 💼</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-sm mt-1">✅</span>
                  <p className="font-poppins dark:text-white text-nft-black-1 text-base">Create high-quality, original artwork</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sm mt-1">✅</span>
                  <p className="font-poppins dark:text-white text-nft-black-1 text-base">Write compelling descriptions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sm mt-1">✅</span>
                  <p className="font-poppins dark:text-white text-nft-black-1 text-base">Price competitively based on market</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sm mt-1">✅</span>
                  <p className="font-poppins dark:text-white text-nft-black-1 text-base">Engage with the community</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">

            <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
              <h3 className="font-poppins dark:text-white text-nft-black-1 text-lg font-semibold mb-2">What is an NFT?</h3>
              <p className="font-poppins dark:text-white text-nft-black-1 text-base">
                NFT stands for Non-Fungible Token. It's a unique digital certificate that proves ownership of a digital asset,
                stored securely on the blockchain.
              </p>
            </div>

            <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
              <h3 className="font-poppins dark:text-white text-nft-black-1 text-lg font-semibold mb-2">Do I own the copyright to an NFT I buy?</h3>
              <p className="font-poppins dark:text-white text-nft-black-1 text-base">
                Buying an NFT typically grants you ownership of the token itself, but not necessarily the copyright to the underlying
                artwork. Check the specific terms for each NFT.
              </p>
            </div>

            <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
              <h3 className="font-poppins dark:text-white text-nft-black-1 text-lg font-semibold mb-2">Can I resell my NFT?</h3>
              <p className="font-poppins dark:text-white text-nft-black-1 text-base">
                Yes! Once you own an NFT, you can list it for sale on CrypTau or any other compatible marketplace.
                The original creator may earn royalties from the resale.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
);

export default HowItWorks;
