# 🎨 CrypTau NFT Marketplace

> A full-stack, decentralized NFT marketplace — mint, buy, sell, and resell NFTs powered by a custom ERC-721 smart contract on the MegaETH testnet.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-cryptau.vercel.app-blueviolet?style=for-the-badge&logo=vercel)](https://cryptau.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-12-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Solidity](https://img.shields.io/badge/Solidity-0.8.28-363636?style=for-the-badge&logo=solidity)](https://soliditylang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Smart Contract](#-smart-contract)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Deploying the Contract](#-deploying-the-smart-contract)
- [Supported Networks](#-supported-networks)
- [Pages & Routes](#-pages--routes)
- [Author](#-author)

---

## 🌐 Overview

**CrypTau** is a decentralized NFT marketplace built for creators and collectors. Users can connect their MetaMask wallet, mint original NFTs (with metadata stored on IPFS via Pinata), list them for sale, purchase others' NFTs, and resell their acquired pieces — all on-chain, without any centralised intermediary.

The project is built as a full-stack Web3 application: the frontend runs on **Next.js**, the backend logic lives inside a single **Solidity smart contract** (`Cryptau.sol`), and asset/metadata storage is handled by **Pinata (IPFS)**.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🖼️ **Mint NFTs** | Upload artwork and metadata, mint an ERC-721 token directly from the browser |
| 💸 **Buy NFTs** | Browse the live marketplace and purchase listed NFTs with ETH |
| 🔄 **Resell NFTs** | Relist any NFT you own back on the marketplace at your chosen price |
| 📦 **IPFS Storage** | All images and metadata pinned to IPFS via Pinata — truly decentralised |
| 🦊 **MetaMask Auth** | Wallet-based authentication — no passwords, no accounts |
| 🏆 **Top Creators** | Homepage leaderboard showcasing the highest-volume sellers |
| 🔍 **Search & Sort** | Filter NFTs by name; sort by price or recency |
| 🌗 **Dark / Light Mode** | Full theme support via `next-themes` |
| 📬 **Contact Form** | EmailJS-powered contact page for direct inquiries |
| 📱 **Responsive UI** | Fully responsive design with TailwindCSS |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Browser (User)                   │
│          MetaMask Wallet  ←→  Next.js Frontend       │
└───────────────────┬─────────────────────────────────┘
                    │ ethers.js
                    ▼
┌─────────────────────────────────────────────────────┐
│            Cryptau.sol (ERC-721 Smart Contract)      │
│         Deployed on MegaETH Testnet (chainId 6342)  │
└───────────────────┬─────────────────────────────────┘
                    │ Token URI → IPFS CID
                    ▼
┌─────────────────────────────────────────────────────┐
│            Pinata / IPFS (Decentralised Storage)     │
│         Images + JSON Metadata stored permanently   │
└─────────────────────────────────────────────────────┘
```

**Data flow for minting:**
1. User uploads an image → Pinata pins it → returns an IPFS URL.
2. App creates a JSON metadata object (name, description, image URL) → pins to IPFS.
3. Metadata IPFS URL is sent to `createToken()` on the contract along with the listing price.
4. Contract mints the ERC-721 token and lists it on the marketplace.

---

## 🛠️ Tech Stack

### Frontend
| Library | Version | Purpose |
|---|---|---|
| Next.js | 12 | React framework & routing |
| React | 17 | UI library |
| TailwindCSS | 3 | Utility-first styling |
| next-themes | 0.1.1 | Dark/light mode |
| react-dropzone | 12 | Drag-and-drop file upload |
| react-hot-toast | 2 | Toast notifications |
| axios | 0.26 | HTTP requests for IPFS metadata |

### Blockchain
| Library | Version | Purpose |
|---|---|---|
| ethers.js | 5.5.4 | Ethereum interaction |
| web3modal | 1.9.5 | Wallet connection modal |
| Hardhat | 2.9+ | Smart contract dev environment |
| OpenZeppelin | 4.5 | ERC-721 base contract |
| Solidity | 0.8.28 | Smart contract language |

### Storage & Services
| Service | Purpose |
|---|---|
| Pinata | IPFS pinning for images and metadata |
| EmailJS | Contact form email delivery |
| Vercel | Frontend deployment |

---

## 📁 Project Structure

```
tautau_nft_workplace/
│
├── contracts/
│   └── Cryptau.sol          # Core ERC-721 + marketplace smart contract
│
├── scripts/
│   └── deploy.js            # Hardhat deployment script
│
├── context/
│   ├── NFTContext.js        # Global React context — all Web3 logic lives here
│   └── constants.js         # Contract address & ABI imports
│
├── pages/
│   ├── index.js             # Home — marketplace listing & top creators
│   ├── create-nft.js        # Mint a new NFT
│   ├── nft-details.js       # NFT detail & purchase page
│   ├── my-nft.js            # User's owned NFTs
│   ├── resell-nfts.js       # Relist an owned NFT
│   ├── ListedNFTS.js        # NFTs the user has listed for sale
│   ├── about.js             # About page
│   ├── howItWorks.js        # How It Works guide
│   ├── help.js              # FAQ / Help centre
│   ├── contact.js           # Contact form (EmailJS)
│   └── terms.js             # Terms of service
│
├── components/
│   ├── Navbar.jsx           # Navigation bar with wallet connect
│   ├── NFTCard.jsx          # Individual NFT tile
│   ├── CreatorCard.jsx      # Top creator leaderboard card
│   ├── Banner.jsx           # Hero banner
│   ├── SearchBar.jsx        # Search + sort controls
│   ├── Modal.jsx            # Purchase confirmation modal
│   ├── Input.jsx            # Reusable form input
│   ├── Button.jsx           # Reusable button
│   ├── Loader.jsx           # Loading spinner
│   └── Footer.jsx           # Site footer
│
├── utils/
│   ├── getTopCreators.js    # Ranks sellers by total ETH volume
│   ├── shortenAddress.js    # Truncates wallet addresses for display
│   └── makeId.js            # Generates random IDs
│
├── styles/                  # Global CSS
├── assets/                  # Static images and icons
├── public/                  # Next.js public assets
├── hardhat.config.js        # Hardhat network configuration
├── next.config.mjs          # Next.js configuration
└── .env.local               # Environment variables (not committed)
```

---

## 📜 Smart Contract

**File:** [`contracts/Cryptau.sol`](contracts/Cryptau.sol)  
**Token name:** `CrypTau Tokens` | **Symbol:** `Metaverse`  
**Standard:** ERC-721 (via OpenZeppelin `ERC721URIStorage`)

### Key Functions

| Function | Visibility | Description |
|---|---|---|
| `createToken(tokenURI, price)` | `public payable` | Mint a new NFT and list it on the marketplace |
| `createMarketSale(tokenId)` | `public payable` | Purchase a listed NFT |
| `resellToken(tokenId, price)` | `public payable` | Relist an owned NFT for sale |
| `fetchMarket()` | `public view` | Returns all currently unsold NFTs |
| `fetchMyNFTs()` | `public view` | Returns NFTs owned by the caller |
| `fetchItemsListed()` | `public view` | Returns NFTs the caller has listed |
| `getListingPrice()` | `public view` | Returns the current listing fee |
| `updateListingPrice(price)` | `public payable` | Owner-only: update the listing fee |

### Fee Model
- A small **listing fee** (default `0.000000001 ETH`) is charged to the marketplace owner each time an NFT is listed or resold.
- On sale, the seller receives `sale price − listing fee`. The listing fee goes to the contract owner.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16+
- **npm** v8+
- **MetaMask** browser extension
- A **Pinata** account for IPFS storage
- An **EmailJS** account (for the contact form)

### 1. Clone the repository

```bash
git clone https://github.com/tautau08/tautau_nft_workplace.git
cd tautau_nft_workplace
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example below into a new `.env.local` file at the project root:

```env
# Pinata IPFS (https://app.pinata.cloud)
NEXT_PUBLIC_PINATA_API_KEY=your_pinata_api_key
NEXT_PUBLIC_PINATA_SECRET_API_KEY=your_pinata_secret_api_key

# RPC endpoint for the target network
NEXT_PUBLIC_RPC_URL=https://carrot.megaeth.com/rpc

# Deployed smart contract address
NEXT_PUBLIC_CONTRACT_ADDRESS=your_deployed_contract_address

# Network identifiers (MegaETH testnet)
NEXT_PUBLIC_NETWORK_ID=6342
NEXT_PUBLIC_CHAIN_ID=0x18c6

# EmailJS (https://emailjs.com)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_PINATA_API_KEY` | ✅ | Pinata API key for IPFS uploads |
| `NEXT_PUBLIC_PINATA_SECRET_API_KEY` | ✅ | Pinata secret key |
| `NEXT_PUBLIC_RPC_URL` | ✅ | JSON-RPC URL of the target network |
| `NEXT_PUBLIC_CONTRACT_ADDRESS` | ✅ | Address of the deployed `Cryptau` contract |
| `NEXT_PUBLIC_NETWORK_ID` | ✅ | Chain ID (decimal) |
| `NEXT_PUBLIC_CHAIN_ID` | ✅ | Chain ID (hex) — used for MetaMask switch |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | ⚠️ | Required for contact form |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | ⚠️ | Required for contact form |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | ⚠️ | Required for contact form |

---

## 🚢 Deploying the Smart Contract

### Local (Hardhat node)

```bash
# Terminal 1 — start a local blockchain
npx hardhat node

# Terminal 2 — deploy to localhost
npx hardhat run scripts/deploy.js --network localhost
```

### MegaETH Testnet

1. Add your wallet private key to the `.secret` file (without `0x` prefix):
   ```
   your_private_key_here
   ```
2. Deploy:
   ```bash
   npx hardhat run scripts/deploy.js --network megaeth
   ```
3. Copy the logged contract address into `NEXT_PUBLIC_CONTRACT_ADDRESS` in `.env.local`.
4. Update `context/constants.js` with the new address and ABI (copy from `artifacts/`).

---

## 🌍 Supported Networks

| Network | Chain ID | RPC URL |
|---|---|---|
| **MegaETH Testnet** *(default)* | 6342 | `https://carrot.megaeth.com/rpc` |
| Localhost (Hardhat) | 31337 | `http://127.0.0.1:8545` |
| Polygon Mumbai | 80001 | Infura |
| Polygon Mainnet | 137 | Infura |
| Sepolia | 11155111 | `https://rpc.sepolia.org` |
| Base Sepolia | 84532 | `https://sepolia.base.org` |

> 💡 To get testnet ETH for MegaETH, visit the [MegaETH Faucet](https://faucet.megaeth.network/).

---

## 📄 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Browse all live NFT listings and top creators |
| `/create-nft` | Create NFT | Upload & mint a new NFT |
| `/nft-details` | NFT Details | View details and purchase a specific NFT |
| `/my-nft` | My NFTs | View all NFTs you own |
| `/resell-nfts` | Resell NFT | Relist an owned NFT at a new price |
| `/ListedNFTS` | Listed NFTs | View NFTs you currently have listed |
| `/about` | About | Project background |
| `/howItWorks` | How It Works | Step-by-step guide for users |
| `/help` | Help | FAQ and troubleshooting |
| `/contact` | Contact | Send a message via EmailJS |
| `/terms` | Terms | Terms of service |

---

## 👤 Author

**Tauhidur Rahman Tauhid**  
[![Instagram](https://img.shields.io/badge/Instagram-%40tauhidur__rahman__tauhid-E4405F?style=flat&logo=instagram)](https://www.instagram.com/tauhidur_rahman_tauhid?igsh=MTE0NDIzNmdqdWw0Mw%3D%3D&utm_source=qr)

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

*Feel free to open issues or pull requests — contributions are welcome!* 🚀
