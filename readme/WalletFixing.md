# MetaMask Wallet Fixing Guide

When MetaMask shows 0 ETH instead of 10,000 ETH on Hardhat Local network.

## 🔧 Quick Solutions (Try These in Order):

### 1. Refresh MetaMask ⚡
- Click the MetaMask extension
- Click the **refresh/reload icon** (circular arrow)
- Or close and reopen MetaMask

### 2. Switch Networks Back & Forth 🔄
- Switch to **Ethereum Mainnet**
- Wait 2-3 seconds
- Switch back to **Hardhat Local**
- Balance should refresh

### 3. Reset Account in MetaMask 🔄
- MetaMask → Settings → Advanced → **"Reset Account"**
- This clears transaction cache (doesn't delete your account)
- Reconnect to your app

### 4. Restart Hardhat Node 🔄
```bash
# Stop current node (Ctrl+C)
# Then restart:
npx hardhat node
```

### 5. Clear Browser Cache 🧹
- **Ctrl + F5** (hard refresh)
- Or clear browser cache for localhost

## 🎯 Why This Happens:
## 🎯 Why This Happens:

This is a **common intermittent issue** with Hardhat + MetaMask caused by:
- **RPC connection timeout**
- **MetaMask cache issues**
- **Network state synchronization delays**
- **Browser tab switching** (MetaMask loses connection)
- **Hardhat node restarts** creating new blockchain state

## 💡 Most Effective Quick Fix:

**Network Switch Method** works 90% of the time:
1. Switch to **Ethereum Mainnet**
2. Wait 3 seconds
3. Switch back to **Hardhat Local**
4. Balance refreshes automatically

## 🔍 Verify MetaMask Network Settings:

Make sure MetaMask is configured as:
- **Network Name**: Hardhat Local (or Localhost)
- **RPC URL**: `http://127.0.0.1:8545`
- **Chain ID**: `31337`
- **Currency**: ETH

## 🚀 Default Hardhat Test Account:

- **Address**: `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`
- **Private Key**: `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`

Import this account if you haven't already - it comes with 10,000 ETH on Hardhat Local network.