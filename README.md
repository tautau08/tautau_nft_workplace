# CrypTau NFT Marketplace

A modern, full-stack NFT marketplace where you can mint, buy, and sell NFTs on the MegaETH testnet.

![CrypTau Banner](public/logo.png)

## 🚀 Live Demo

👉 [cryptau.vercel.app](https://cryptau.vercel.app)

---

## Features

- 🖼️ Mint and list your own NFTs
- 💸 Buy and sell NFTs securely
- 🔗 Powered by MegaETH testnet
- 🌐 IPFS storage via Pinata
- 🦊 MetaMask wallet integration
- 🎨 Responsive, modern UI

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/tautau08/tautau_nft_workplace.git
cd tautau_nft_workplace
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add:

```
NEXT_PUBLIC_PINATA_API_KEY=your_pinata_api_key
NEXT_PUBLIC_PINATA_SECRET_API_KEY=your_pinata_secret_api_key
NEXT_PUBLIC_RPC_URL=https://carrot.megaeth.com/rpc
NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address
NEXT_PUBLIC_NETWORK_ID=6342
NEXT_PUBLIC_CHAIN_ID=0x18c6
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

- Connect your MetaMask wallet (switch to MegaETH testnet).
- Mint, list, and buy NFTs.
- All NFT data is stored on IPFS via Pinata.

---

## Smart Contract

- Written in Solidity (`contracts/Cryptau.sol`)
- Deployed on MegaETH testnet
- [View contract on MegaETH explorer](https://megaeth.network/)

---

## Tech Stack

- Next.js
- Solidity (Hardhat)
- Ethers.js
- Pinata (IPFS)
- MetaMask
- Vercel (deployment)

---

## License

MIT

---

## Author

- [Tauhidur Rahman Tauhid](https://www.instagram.com/tauhidur_rahman_tauhid?igsh=MTE0NDIzNmdqdWw0Mw%3D%3D&utm_source=qr)

---

## Links

- [Live Demo](https://cryptau.vercel.app)
- [MegaETH Faucet](https://faucet.megaeth.network/)
- [MegaETH Docs](https://docs.megaeth.network/)

---

*Feel free to open issues or contribute!*