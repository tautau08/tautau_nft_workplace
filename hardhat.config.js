// Use the packages that are already installed
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
const fs = require('fs');

// Read private key from .secret file
let privateKey;
try {
  privateKey = fs.readFileSync('.secret').toString().trim();
} catch (error) {
  console.error('Error reading .secret file. Please create a .secret file with your MetaMask private key.');
  privateKey = '0000000000000000000000000000000000000000000000000000000000000000'; // Default invalid key
}

module.exports = {
  solidity: '0.8.28',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    sepolia: {
      url: 'https://sepolia.infura.io/v3/your-api-key',
      accounts: [privateKey],
    },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/your-api-key',
      accounts: [privateKey],
    },
    polygon: {
      url: 'https://polygon-mainnet.infura.io/v3/your-api-key',
      accounts: [privateKey],
    },
  },
};
