import { useState } from 'react';
import { Banner } from '../components';

const HelpCenter = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const helpSections = [
    {
      title: '🔧 Local Development Setup',
      content: `
**Prerequisites:**
• Node.js (v16 or higher)
• Git
• MetaMask browser extension

**Installation Steps:**
1. Clone the repository:
   \`git clone <repository-url>\`
   \`cd tautau_nft_workplace\`

2. Install dependencies:
   \`npm install\`

3. Create environment file:
   Create \`.env.local\` in root directory:
   \`\`\`
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   \`\`\`

4. Start development server:
   \`npm run dev\`

5. Open http://localhost:3000 in your browser

**Common Issues:**
• Port 3000 already in use → Use \`npm run dev -- -p 3001\`
• Module not found → Delete \`node_modules\` and run \`npm install\`
• Environment variables not working → Restart development server
      `,
    },
    {
      title: '🦊 MetaMask Connection Issues',
      content: `
**MetaMask Not Connecting:**
1. Ensure MetaMask is installed and unlocked
2. Check if correct network is selected
3. Clear browser cache and cookies
4. Disable other wallet extensions

**Wrong Network Error:**
1. Open MetaMask
2. Click network dropdown (top)
3. Select "Add Network" or "Custom RPC"
4. Add Localhost network:
   • Network Name: Localhost 8545
   • RPC URL: http://127.0.0.1:8545
   • Chain ID: 31337
   • Currency: ETH

**Account Balance Shows 0 ETH:**
1. Reset MetaMask account:
   • Settings → Advanced → Reset Account
2. Import Hardhat test account:
   • Add Account → Import Account
   • Use private key from Hardhat node output
3. Restart Hardhat node if needed:
   \`npx hardhat node\`

**Transaction Rejection:**
• Insufficient funds → Use test account with ETH
• Gas fee too low → Increase gas limit
• Network mismatch → Switch to correct network
      `,
    },
    {
      title: '📧 Email Service Configuration',
      content: `
**EmailJS Setup (5 minutes):**

1. **Create EmailJS Account:**
   • Go to https://www.emailjs.com/
   • Sign up for free account

2. **Add Email Service:**
   • Click "Email Services" → "Add New Service"
   • Choose "Gmail" (recommended)
   • Connect your Gmail account
   • Copy Service ID (e.g., service_abc123)

3. **Create Email Template:**
   • Go to "Email Templates" → "Create New Template"
   • Use this template:
   \`\`\`
   Subject: {{subject}}
   
   Hi {{to_name}}!
   
   {{message}}
   
   Best regards,
   {{from_name}}
   \`\`\`
   • Save and copy Template ID

4. **Get API Keys:**
   • Go to "Account" → "API Keys"
   • Copy Public Key and Private Key

5. **Update .env.local:**
   \`\`\`
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   \`\`\`

**Common Email Issues:**
• "Failed to send email" → Check API keys in .env.local
• Email not received → Check spam folder
• Invalid template → Verify template variables match
      `,
    },
    {
      title: '⛓️ Smart Contract Deployment',
      content: `
**Local Deployment:**

1. **Start Hardhat Node:**
   \`npx hardhat node\`
   (Keep this terminal running)

2. **Deploy Contract:**
   Open new terminal:
   \`npx hardhat run scripts/deploy.js --network localhost\`

3. **Copy Contract Address:**
   • Copy the deployed contract address
   • Update in your frontend code

**Testnet Deployment (Mumbai):**

1. **Create .secret file:**
   • Create \`.secret\` in project root
   • Add your MetaMask private key (without 0x)
   • Never commit this file!

2. **Get Test MATIC:**
   • Go to https://faucet.polygon.technology/
   • Request test MATIC for Mumbai network

3. **Deploy to Mumbai:**
   \`npx hardhat run scripts/deploy.js --network mumbai\`

**Deployment Issues:**
• Insufficient funds → Get test tokens from faucet
• Network error → Check RPC URLs in hardhat.config.js
• Private key error → Verify .secret file format
• Contract verification failed → Use Polygonscan API key
      `,
    },
    {
      title: '❌ Transaction Errors',
      content: `
**Common Transaction Errors:**

**"Transaction Failed" or "Reverted":**
• Check contract address is correct
• Ensure sufficient ETH for gas fees
• Verify function parameters are valid
• Check if contract is deployed on current network

**"User Rejected Transaction":**
• User cancelled transaction in MetaMask
• Click "Confirm" in MetaMask popup
• Check gas fee is acceptable

**"Insufficient Funds":**
• Add more ETH to your wallet
• For localhost: Use Hardhat test accounts
• For testnet: Get tokens from faucet

**"Gas Estimation Failed":**
• Transaction will likely fail
• Check contract function exists
• Verify input parameters
• Ensure contract is not paused

**"Nonce Too High/Low":**
• Reset MetaMask account:
  Settings → Advanced → Reset Account

**Network Issues:**
• Wrong network selected in MetaMask
• Switch to correct network (Localhost/Mumbai/Polygon)
• Check RPC endpoint is working
      `,
    },
    {
      title: '🔍 Common Development Errors',
      content: `
**Frontend Errors:**

**"Cannot connect to wallet":**
• Install MetaMask extension
• Unlock MetaMask wallet
• Refresh page and try again

**"Contract not deployed":**
• Run \`npx hardhat node\`
• Deploy contract: \`npx hardhat run scripts/deploy.js --network localhost\`
• Update contract address in code

**"Environment variables undefined":**
• Check .env.local file exists
• Restart development server
• Variables must start with NEXT_PUBLIC_

**Build Errors:**
• Delete .next folder
• Run \`npm run build\`
• Check for TypeScript errors

**Styling Issues:**
• Restart development server
• Clear browser cache
• Check Tailwind CSS configuration

**API Errors:**
• Check network connectivity
• Verify API endpoints
• Check browser console for errors

**Performance Issues:**
• Optimize images (use Next.js Image component)
• Minimize bundle size
• Use production build for testing
      `,
    },
    {
      title: '🛠️ Advanced Troubleshooting',
      content: `
**Complete Reset Process:**

1. **Clean Installation:**
   \`\`\`
   rm -rf node_modules
   rm package-lock.json
   npm install
   \`\`\`

2. **Reset MetaMask:**
   • Settings → Advanced → Reset Account
   • Remove and re-add localhost network
   • Import fresh Hardhat account

3. **Restart Everything:**
   • Stop all running processes
   • Start Hardhat node: \`npx hardhat node\`
   • Deploy contract: \`npx hardhat run scripts/deploy.js --network localhost\`
   • Start frontend: \`npm run dev\`

**Debug Mode:**
• Open browser Developer Tools (F12)
• Check Console tab for errors
• Monitor Network tab for failed requests
• Use React Developer Tools extension

**Performance Optimization:**
• Use Next.js Image component for images
• Implement lazy loading
• Optimize bundle size
• Use production build for deployment

**Security Best Practices:**
• Never commit private keys
• Use environment variables for sensitive data
• Implement proper error handling
• Validate user inputs
• Use HTTPS in production
      `,
    },
  ];

  return (
    <div className="w-full flex justify-start items-center flex-col min-h-screen">
      <div className="w-full flexCenter flex-col">
        <Banner
          name="Help Center"
          childStyle="text-center mb-4"
          parentStyles="h-80 justify-center"
        />
      </div>

      <div className="sm:px-4 p-12 w-full minmd:w-4/5 flexCenter flex-col">
        <div className="w-full flex flex-col max-w-4xl">

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-bold mb-6">
              Frequently Asked Questions & Solutions
            </h2>
            <p className="font-poppins dark:text-white text-nft-black-1 text-lg leading-8 mb-4">
              Find solutions to common setup, configuration, and deployment issues.
              Click on any section below to expand detailed troubleshooting steps.
            </p>
          </div>

          {/* Help Sections */}
          <div className="space-y-4">
            {helpSections.map((section, index) => (
              <div
                key={index}
                className="bg-white dark:bg-nft-black-2 rounded-lg border dark:border-nft-black-1 border-nft-gray-1 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-nft-black-1 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold">
                      {section.title}
                    </h3>
                    <span className="text-2xl dark:text-white text-nft-black-1">
                      {activeSection === index ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {activeSection === index && (
                  <div className="px-6 pb-6 border-t dark:border-nft-black-1 border-nft-gray-1">
                    <div className="pt-4">
                      <pre className="font-poppins dark:text-white text-nft-black-1 text-base leading-7 whitespace-pre-wrap">
                        {section.content}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-12">
            <h2 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-bold mb-6">
              Quick Reference Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
                <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">
                  🔗 External Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://metamask.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-poppins dark:text-white text-nft-black-1 text-base hover:text-nft-red-violet transition-colors"
                    >
                      • MetaMask Download
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.emailjs.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-poppins dark:text-white text-nft-black-1 text-base hover:text-nft-red-violet transition-colors"
                    >
                      • EmailJS Setup
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://faucet.polygon.technology/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-poppins dark:text-white text-nft-black-1 text-base hover:text-nft-red-violet transition-colors"
                    >
                      • Mumbai Testnet Faucet
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://hardhat.org/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-poppins dark:text-white text-nft-black-1 text-base hover:text-nft-red-violet transition-colors"
                    >
                      • Hardhat Documentation
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1">
                <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">
                  📋 Quick Commands
                </h3>
                <ul className="space-y-2">
                  <li className="font-poppins dark:text-white text-nft-black-1 text-sm">
                    • Start dev: <code className="bg-gray-100 dark:bg-nft-black-1 px-2 py-1 rounded">npm run dev</code>
                  </li>
                  <li className="font-poppins dark:text-white text-nft-black-1 text-sm">
                    • Hardhat node: <code className="bg-gray-100 dark:bg-nft-black-1 px-2 py-1 rounded">npx hardhat node</code>
                  </li>
                  <li className="font-poppins dark:text-white text-nft-black-1 text-sm">
                    • Deploy local: <code className="bg-gray-100 dark:bg-nft-black-1 px-2 py-1 rounded">npx hardhat run scripts/deploy.js --network localhost</code>
                  </li>
                  <li className="font-poppins dark:text-white text-nft-black-1 text-sm">
                    • Reset deps: <code className="bg-gray-100 dark:bg-nft-black-1 px-2 py-1 rounded">rm -rf node_modules && npm install</code>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-12">
            <div className="bg-white dark:bg-nft-black-2 p-6 rounded-lg border dark:border-nft-black-1 border-nft-gray-1 text-center">
              <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl font-semibold mb-3">
                Still Need Help? 🤔
              </h3>
              <p className="font-poppins dark:text-white text-nft-black-1 text-base mb-4">
                Can't find the solution you're looking for? We're here to help!
              </p>
              <a
                href="/contact"
                className="inline-block bg-nft-red-violet text-white font-poppins font-semibold text-base py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all"
              >
                Contact Support
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
