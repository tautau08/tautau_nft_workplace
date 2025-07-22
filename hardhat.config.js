require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
const fs = require('fs');

let privateKey;
try {
  privateKey = fs.readFileSync('.secret', 'utf8').toString().trim();
  if (!privateKey.startsWith('0x')) {
    privateKey = `0x${privateKey}`;
  }
} catch (error) {
  console.error('Error reading .secret file. Please create a .secret file with your MetaMask private key.');
  privateKey = '0x0000000000000000000000000000000000000000000000000000000000000000';
}

module.exports = {
  solidity: '0.8.28',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    ngrok: {
      url: process.env.NGROK_URL || 'https://90c2-103-82-173-157.ngrok-free.app',
      accounts: [privateKey],
      chainId: 31337,
    },
    megaeth: {
      url: 'https://carrot.megaeth.com/rpc',
      accounts: [privateKey],
      chainId: 6342,
    },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/250f3c38bd5340d78d4a628c3146477e',
      accounts: [privateKey],
    },
    polygon: {
      url: 'https://polygon-mainnet.infura.io/v3/250f3c38bd5340d78d4a628c3146477e',
      accounts: [privateKey],
    },
    sepolia: {
      url: 'https://rpc.sepolia.org',
      accounts: [privateKey],
    },
    baseSepolia: {
      url: 'https://sepolia.base.org',
      accounts: [privateKey],
      chainId: 84532,
    },
  },
};
