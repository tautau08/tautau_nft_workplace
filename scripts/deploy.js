const hre = require('hardhat');

async function main() {
  try {
    // Get the ContractFactory and Signer
    const Cryptau = await hre.ethers.getContractFactory('Cryptau');
    const [deployer] = await hre.ethers.getSigners();

    console.log(`Deploying contracts with the account: ${deployer.address}`); // Deploy contract
    const cryptau = await Cryptau.deploy();

    // Wait for deployment to complete (ethers v5)
    await cryptau.deployed();

    // Get the contract address (ethers v5 style)
    const { address } = cryptau;
    console.log(`Cryptau deployed to: ${address}`); // Get the listing price
    const listingPrice = await cryptau.getListingPrice();
    console.log(`Listing price: ${hre.ethers.utils.formatEther(listingPrice)} ETH`);
  } catch (error) {
    console.error('Deployment error:', error);
    process.exit(1);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
