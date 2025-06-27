# Cryptau NFT Marketplace Deployment Guide

This guide explains how to deploy the Cryptau NFT Marketplace smart contract using your MetaMask wallet.

## Prerequisites

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.secret` file:
   - Create a new file named `.secret` in the project root directory
   - Add your MetaMask private key to this file (without the 0x prefix)
   - Save the file
   - Never commit this file to version control

## Deployment Steps

1. Start a local blockchain (for testing):
   ```
   npx hardhat node
   ```

2. Deploy to local network:
   ```
   npx hardhat run scripts/deploy.js --network localhost
   ```

3. Deploy to testnet (Mumbai):
   ```
   npx hardhat run scripts/deploy.js --network mumbai
   ```

4. Deploy to mainnet (Polygon):
   ```
   npx hardhat run scripts/deploy.js --network polygon
   ```

## Getting Your MetaMask Private Key

1. Open MetaMask and click on the account menu (top-right)
2. Go to "Account details"
3. Click "Export Private Key"
4. Enter your password
5. Copy the private key (without 0x prefix) to your `.secret` file

## Important Security Notes

- Never share your private key with anyone
- Use a dedicated deployment wallet with limited funds
- Consider transferring ownership of the contract after deployment
- Always test on testnet before mainnet deployment