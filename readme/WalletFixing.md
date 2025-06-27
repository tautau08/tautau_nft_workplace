The issue is that your Hardhat node restarted and created a new blockchain, but your MetaMask is still trying to connect to the old blockchain state where you had ETH.

Quick Fix:
1. Reset MetaMask Account:
Open MetaMask
Go to Settings → Advanced
Click "Reset Account"
This clears the transaction history and syncs with the new blockchain
2. Import Fresh Account from Hardhat:
In your terminal where Hardhat node is running, you'll see accounts like:
In MetaMask: Add Account → Import Account → Paste the private key
Or use the account you already imported but reset it
3. Restart Everything Clean:
4. Update Contract Address:
Copy the NEW contract address from deployment and update:

5. Verify MetaMask Network:
Make sure MetaMask is connected to:

Network Name: Localhost 8545
RPC URL: http://127.0.0.1:8545
Chain ID: 31337
Currency: ETH
The Problem:
Every time Hardhat restarts, it creates a completely new blockchain with new addresses and balances. Your MetaMask is still connected to the old blockchain state, so it shows 0 ETH.

After resetting MetaMask account, you should see 10000 ETH again!

This happens because:

Hardhat node restarts → New blockchain
Your contract gets new address → Old address invalid
MetaMask cached old blockchain → Shows 0 ETH
Reset clears cache → Syncs with new blockchain
Try this and your ETH balance should be back to 10000!