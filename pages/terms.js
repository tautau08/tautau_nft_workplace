import { Banner } from '../components';

const TermsOfService = () => (
  <div className="w-full flex justify-start items-center flex-col min-h-screen">
    <div className="w-full flexCenter flex-col">
      <Banner
        name="Terms of Service"
        childStyle="text-center mb-4"
        parentStyles="h-80 justify-center"
      />
    </div>

    <div className="sm:px-4 p-12 w-full minmd:w-4/5 flexCenter flex-col">
      <div className="w-full flex flex-col max-w-4xl">

        {/* Introduction */}
        <div className="mb-12">
          <p className="font-poppins dark:text-white text-nft-black-1 text-base mb-4">
            <strong>Last Updated:</strong> June 2025
          </p>
          <p className="font-poppins dark:text-white text-nft-black-1 text-lg leading-8">
            By using CrypTau, you agree to these terms. Please read carefully before using our NFT marketplace.
          </p>
        </div>

        {/* Platform Use */}
        <div className="mb-8">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-2xl font-bold mb-4">
            1. Platform Use
          </h2>
          <ul className="font-poppins dark:text-white text-nft-black-1 text-base leading-7 ml-6 space-y-2">
            <li>• CrypTau is an NFT marketplace for buying, selling, and trading digital assets</li>
            <li>• You must be 18+ years old to use this platform</li>
            <li>• You're responsible for your wallet security and private keys</li>
            <li>• All transactions are recorded on the blockchain and are irreversible</li>
          </ul>
        </div>

        {/* User Responsibilities */}
        <div className="mb-8">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-2xl font-bold mb-4">
            2. Your Responsibilities
          </h2>
          <ul className="font-poppins dark:text-white text-nft-black-1 text-base leading-7 ml-6 space-y-2">
            <li>• Only upload original content or content you own</li>
            <li>• No copyrighted, illegal, or offensive material</li>
            <li>• Secure your wallet and never share private keys</li>
            <li>• Pay all applicable gas fees and taxes</li>
            <li>• Comply with your local laws and regulations</li>
          </ul>
        </div>

        {/* Fees & Trading */}
        <div className="mb-8">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-2xl font-bold mb-4">
            3. Fees & Trading
          </h2>
          <ul className="font-poppins dark:text-white text-nft-black-1 text-base leading-7 ml-6 space-y-2">
            <li>• Platform fee: 2.5% on successful sales</li>
            <li>• Gas fees: Paid by transaction initiator</li>
            <li>• All sales are final once confirmed on blockchain</li>
            <li>• We don't guarantee NFT value or authenticity</li>
          </ul>
        </div>

        {/* Prohibited Activities */}
        <div className="mb-8">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-2xl font-bold mb-4">
            4. Prohibited Activities
          </h2>
          <ul className="font-poppins dark:text-white text-nft-black-1 text-base leading-7 ml-6 space-y-2">
            <li>• No money laundering or illegal activities</li>
            <li>• No trading stolen or fraudulent NFTs</li>
            <li>• No market manipulation or wash trading</li>
            <li>• No harassment or abuse of other users</li>
            <li>• No circumventing platform security</li>
          </ul>
        </div>

        {/* Risks & Disclaimers */}
        <div className="mb-8">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-2xl font-bold mb-4">
            5. Risks & Disclaimers
          </h2>
          <ul className="font-poppins dark:text-white text-nft-black-1 text-base leading-7 ml-6 space-y-2">
            <li>• Blockchain transactions are irreversible</li>
            <li>• Cryptocurrency values are volatile</li>
            <li>• Network issues may cause delays or failures</li>
            <li>• Service provided "as is" without warranties</li>
            <li>• You trade at your own risk</li>
            <li>• Our liability is limited to fees paid to us</li>
          </ul>
        </div>

        {/* Intellectual Property */}
        <div className="mb-8">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-2xl font-bold mb-4">
            6. Intellectual Property
          </h2>
          <ul className="font-poppins dark:text-white text-nft-black-1 text-base leading-7 ml-6 space-y-2">
            <li>• You retain ownership of your content</li>
            <li>• You grant us license to display your content on the platform</li>
            <li>• Respect others' intellectual property rights</li>
            <li>• CrypTau branding and code are our property</li>
          </ul>
        </div>

        {/* Account Termination */}
        <div className="mb-8">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-2xl font-bold mb-4">
            7. Account Termination
          </h2>
          <ul className="font-poppins dark:text-white text-nft-black-1 text-base leading-7 ml-6 space-y-2">
            <li>• You can stop using CrypTau anytime</li>
            <li>• We may suspend accounts for violations</li>
            <li>• Your NFTs remain in your wallet after termination</li>
            <li>• Outstanding transactions may be completed</li>
          </ul>
        </div>

        {/* Changes & Contact */}
        <div className="mb-8">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-2xl font-bold mb-4">
            8. Changes & Contact
          </h2>
          <ul className="font-poppins dark:text-white text-nft-black-1 text-base leading-7 ml-6 space-y-2">
            <li>• We may update these terms anytime</li>
            <li>• Continued use means acceptance of new terms</li>
            <li>• Contact us: <a href="mailto:tauhid062018@gmail.com" className="hover:text-nft-red-violet transition-colors">tauhid062018@gmail.com</a></li>
            <li>• Phone: <a href="tel:+8801301802206" className="hover:text-nft-red-violet transition-colors">+880 1301 802 206</a></li>
          </ul>
        </div>

        {/* Agreement */}
        <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
          <p className="font-poppins dark:text-white text-nft-black-1 text-base leading-7 text-center">
            <strong>By using CrypTau, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</strong>
          </p>
        </div>

      </div>
    </div>
  </div>
);

export default TermsOfService;
