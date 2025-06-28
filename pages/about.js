import { Banner } from '../components';

const About = () => (
  <div className="w-full flex justify-start items-center flex-col min-h-screen">
    <div className="w-full flexCenter flex-col">
      <Banner
        name="Explore CrypTau"
        childStyle="text-center mb-4"
        parentStyles="h-80 justify-center"
      />
    </div>

    <div className="sm:px-4 p-12 w-full minmd:w-4/5 flexCenter flex-col">
      <div className="w-full flex flex-col max-w-4xl">

        {/* Project Overview */}
        <div className="mb-12">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-bold mb-6">About CrypTau NFT Marketplace</h2>
          <p className="font-poppins dark:text-white text-nft-black-1 text-lg leading-8 mb-4">
            CrypTau is a modern, decentralized NFT marketplace built with cutting-edge web technologies.
            Our platform enables users to create, buy, sell, and trade Non-Fungible Tokens (NFTs) securely
            on the blockchain.
          </p>
          <p className="font-poppins dark:text-white text-nft-black-1 text-lg leading-8">
            The marketplace features a sleek, responsive design with dark/light theme support,
            providing an exceptional user experience across all devices.
          </p>
        </div>

        {/* Frontend Technologies */}
        <div className="mb-12">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-bold mb-6">Frontend Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
              <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">⚛️ Next.js</h3>
              <p className="font-poppins dark:text-white text-nft-black-1 text-base leading-6">
                React-based framework for server-side rendering, static site generation, and optimal performance.
              </p>
            </div>

            <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
              <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">🎨 Tailwind CSS</h3>
              <p className="font-poppins dark:text-white text-nft-black-1 text-base leading-6">
                Utility-first CSS framework for rapid UI development and responsive design.
              </p>
            </div>

            <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
              <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">🌙 Next Themes</h3>
              <p className="font-poppins dark:text-white text-nft-black-1 text-base leading-6">
                Dark/Light theme switching with system preference detection and smooth transitions.
              </p>
            </div>

            <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
              <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">🔥 React Hot Toast</h3>
              <p className="font-poppins dark:text-white text-nft-black-1 text-base leading-6">
                Beautiful toast notifications for user feedback and enhanced UX.
              </p>
            </div>
          </div>
        </div>

        {/* Blockchain & APIs */}
        <div className="mb-12">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-bold mb-6">Blockchain & APIs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
              <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">🔗 Web3.js</h3>
              <p className="font-poppins dark:text-white text-nft-black-1 text-base leading-6">
                Ethereum blockchain interaction library for smart contract integration and wallet connectivity.
              </p>
            </div>

            <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
              <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">📎 Pinata IPFS</h3>
              <p className="font-poppins dark:text-white text-nft-black-1 text-base leading-6">
                Decentralized file storage for NFT metadata and images using IPFS protocol.
              </p>
            </div>

            <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
              <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">📧 EmailJS</h3>
              <p className="font-poppins dark:text-white text-nft-black-1 text-base leading-6">
                Client-side email service for newsletter subscriptions and user communications.
              </p>
            </div>

            <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
              <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">🦊 MetaMask</h3>
              <p className="font-poppins dark:text-white text-nft-black-1 text-base leading-6">
                Ethereum wallet integration for secure transactions and user authentication.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-bold mb-6">Platform Features</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <span className="text-2xl">🎨</span>
              <div>
                <h3 className="font-poppins dark:text-white text-nft-black-1 text-lg font-semibold mb-2">Create & Mint NFTs</h3>
                <p className="font-poppins dark:text-white text-nft-black-1 text-base">Upload artwork, set metadata, and mint NFTs directly on the blockchain.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl">🛍️</span>
              <div>
                <h3 className="font-poppins dark:text-white text-nft-black-1 text-lg font-semibold mb-2">Buy & Sell NFTs</h3>
                <p className="font-poppins dark:text-white text-nft-black-1 text-base">Browse, purchase, and list NFTs with secure blockchain transactions.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl">🔍</span>
              <div>
                <h3 className="font-poppins dark:text-white text-nft-black-1 text-lg font-semibold mb-2">Search & Filter</h3>
                <p className="font-poppins dark:text-white text-nft-black-1 text-base">Advanced search functionality with multiple filtering options.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl">👤</span>
              <div>
                <h3 className="font-poppins dark:text-white text-nft-black-1 text-lg font-semibold mb-2">User Profiles</h3>
                <p className="font-poppins dark:text-white text-nft-black-1 text-base">Personal collections, owned NFTs, and transaction history.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl">📱</span>
              <div>
                <h3 className="font-poppins dark:text-white text-nft-black-1 text-lg font-semibold mb-2">Responsive Design</h3>
                <p className="font-poppins dark:text-white text-nft-black-1 text-base">Optimized for desktop, tablet, and mobile devices.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-12">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-bold mb-6">Technical Specifications</h2>
          <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-poppins dark:text-white text-nft-black-1 text-lg font-semibold mb-3">Frontend Stack</h4>
                <ul className="font-poppins dark:text-white text-nft-black-1 text-base space-y-1">
                  <li>• Next.js 13+ (React Framework)</li>
                  <li>• JavaScript ES6+</li>
                  <li>• Tailwind CSS</li>
                  <li>• React Hooks</li>
                </ul>
              </div>

              <div>
                <h4 className="font-poppins dark:text-white text-nft-black-1 text-lg font-semibold mb-3">Blockchain</h4>
                <ul className="font-poppins dark:text-white text-nft-black-1 text-base space-y-1">
                  <li>• Hardhat Ethereum Network</li>
                  <li>• ERC-721 NFT Standard</li>
                  <li>• Smart Contracts</li>
                  <li>• IPFS Storage</li>
                </ul>
              </div>

              <div>
                <h4 className="font-poppins dark:text-white text-nft-black-1 text-lg font-semibold mb-3">APIs & Services</h4>
                <ul className="font-poppins dark:text-white text-nft-black-1 text-base space-y-1">
                  <li>• Pinata IPFS API</li>
                  <li>• EmailJS Service</li>
                  <li>• Web3 Provider</li>
                  <li>• MetaMask Integration</li>
                </ul>
              </div>

              <div>
                <h4 className="font-poppins dark:text-white text-nft-black-1 text-lg font-semibold mb-3">Development</h4>
                <ul className="font-poppins dark:text-white text-nft-black-1 text-base space-y-1">
                  <li>• Node.js Runtime</li>
                  <li>• NPM Package Manager</li>
                  <li>• ESLint Code Quality</li>
                  <li>• Git Version Control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default About;
