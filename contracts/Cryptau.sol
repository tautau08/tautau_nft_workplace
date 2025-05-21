//SPDX-License-Identifier: UNLICENSED
 pragma solidity ^0.8.28;

 // Import OpenZeppelin libraries for NFT functionality and counters
 import "@openzeppelin/contracts/utils/Counters.sol";
 import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

/**
 * @title Cryptau NFT Marketplace
 * @dev A marketplace for creating, buying, and selling NFTs
 * Extends ERC721URIStorage to add metadata support to the NFTs
 */
contract Cryptau is ERC721URIStorage{   
   
   using Counters for Counters.Counter;

   // Counter for token IDs - tracks the next token ID to be minted
   Counters.Counter private _tokenIds;
   // Counter for sold items - tracks how many items have been sold
   Counters.Counter private _itemsSold;

   // Fee required to list an NFT on the marketplace (0.025 ETH)
   uint256 listingPrice =0.025 ether;

   // Address of the marketplace owner - receives listing fees
    address payable owner;

   // Maps token IDs to their market item data
   mapping (uint256=> MarketItem) private idToMarketItem;   struct MarketItem{
      uint256 tokenId;     // Unique identifier for the NFT
      address payable seller;  // Address of the person selling the NFT
      address payable owner;   // Current owner of the NFT (marketplace when listed)
      uint256 price;       // Price of the NFT in wei
      bool sold;           // Whether the NFT has been sold
   }

   // Event emitted when a new item is listed on the marketplace
   event MarketItemCreated(
      uint256 indexed tokenId,
      address payable seller,
      address payable owner,
      uint256 price,
      bool sold
   );

   // Constructor - sets deployer as the marketplace owner
   constructor() ERC721("CrypTau Tokens", "Metaverse"){
      owner=payable(msg.sender);
   }   function updateListingPrice(uint _listingPrice) public payable {
      require(owner==msg.sender, "Only marketplace owner can update the listing price");
      listingPrice = _listingPrice;
   }

   // Returns the current listing fee required to list an NFT
   function getListingPrice() public view returns (uint256){
      return listingPrice;
   }

   /**
    * @dev Creates a new NFT token and lists it in the marketplace
    * @param tokenURI The metadata URI for the NFT
    * @param price The price for which the NFT is being listed
    * @return The ID of the newly created token
    */
   function createToken(string memory tokenURI,uint256 price) public payable returns (uint){
      // Increment the token ID counter to get a new unique ID
      _tokenIds.increment();

      uint256 newTokenId = _tokenIds.current();
      // Mint the NFT to the caller's address
      _mint(msg.sender, newTokenId);
      // Set the token metadata URI
      _setTokenURI(newTokenId, tokenURI);

      // List the NFT in the marketplace
      createMarketItem(newTokenId,price);

      return newTokenId;

   }   function createMarketItem(uint256 tokenId, uint256 price) private {
      // Ensure price is valid and listing fee is paid
      require(price > 0, "Price must be atleast 1" );
      require(msg.value == listingPrice, "Price must be equal to listing price");

      // Create a new market item in our mapping
      idToMarketItem[tokenId] = MarketItem(
         tokenId,
         payable(msg.sender),          // Current owner becomes the seller
         payable(address(this)),       // Marketplace contract becomes the owner
         price,
         false                         // Not sold yet
      );

      // Transfer the NFT from the seller to the marketplace contract
      _transfer(msg.sender, address(this), tokenId);

      // Emit event to notify listeners about the new listing
      emit MarketItemCreated(
         tokenId, 
         payable(msg.sender),         // seller
         payable(address(this)),      // owner 
         price, 
         false
      );
   }   function resellToken(uint256 tokenId, uint256 price) public payable {
      // Only the current owner can resell their NFT
      require(idToMarketItem[tokenId].owner == msg.sender, "Only item owner can perform this operation");
      // Ensure listing fee is paid
      require(msg.value == listingPrice, "Price must be equal to listing price");      // Update the marketplace item details for reselling
      idToMarketItem[tokenId].sold = false;  // Mark as not sold
      idToMarketItem[tokenId].seller = payable(msg.sender);  // Current owner becomes seller
      idToMarketItem[tokenId].owner = payable(address(this));  // Marketplace becomes owner
      idToMarketItem[tokenId].price = price;  // Update with new price
      
      // Decrement the number of sold items since this is back on the market
      _itemsSold.decrement();

      // Transfer the NFT from the seller back to the marketplace contract
      _transfer(msg.sender, address(this), tokenId);
   }
   
    function createMarketSale(uint256 tokenId) public payable {
      // Get the price of the NFT
      uint price = idToMarketItem[tokenId].price;
      // Ensure buyer has sent the exact price amount
      require(msg.value == price, "Please submit the asking price in order to complete the purchase");
      
      // Update ownership records
      idToMarketItem[tokenId].owner = payable(msg.sender);  // Buyer becomes the new owner
      idToMarketItem[tokenId].sold = true;                  // Mark as sold
      idToMarketItem[tokenId].seller = payable(address(0)); // Clear seller address
      
      // Increment count of items sold
      _itemsSold.increment();

      // Distribute funds: marketplace owner gets the listing fee
      payable(owner).transfer(listingPrice);
      // Original seller gets the purchase amount
      payable(idToMarketItem[tokenId].seller).transfer(msg.value);
    }   function fetchMarket() public view returns(MarketItem[] memory) {
     // Get the total number of tokens created
     uint itemCount = _tokenIds.current(); 
     // Calculate how many tokens are still unsold
     uint unsoldItemCount = _tokenIds.current() - _itemsSold.current(); 
     uint currentIndex = 0;

     // Create array to hold all unsold market items
     MarketItem[] memory items = new MarketItem[](unsoldItemCount);

     // Loop through all tokens
     for (uint i=0; i<itemCount; i++){
      // Check if the NFT is still owned by the marketplace (means it's unsold)
      if(idToMarketItem[i+1].owner == address(this)){
         uint currentId =  i+1;

         // Get the marketplace item from storage
         MarketItem storage currentItem = idToMarketItem[currentId];

         // Add it to our array of unsold items
         items[currentIndex] = currentItem;

         // Move to next position in our result array
         currentIndex +=1;
      }
     }

     // Return the array of unsold marketplace items
     return items;
   }       function fetchMyNFTs() public view returns (MarketItem[] memory){
      uint totalItemCount = _tokenIds.current();
      uint itemCount = 0;
      uint currentIndex = 0;
      
      // First loop: Count how many NFTs the caller owns
      for (uint i = 0; i < totalItemCount; i++) {
        // Check if NFT is owned by the caller
        if (idToMarketItem[i + 1].owner == msg.sender) {
          itemCount += 1;
        }
      }
      
      // Create array to hold the caller's NFTs
      MarketItem[] memory items = new MarketItem[](itemCount);
      
      // Second loop: Fill the array with the caller's NFTs
      for (uint i = 0; i < totalItemCount; i++) {
        // Check if NFT is owned by the caller
        if (idToMarketItem[i + 1].owner == msg.sender) {
          // Get the ID of the market item
          uint currentId = i + 1;
          // Get the reference to the current market item
          MarketItem storage currentItem = idToMarketItem[currentId];
          // Add to the array of results
          items[currentIndex] = currentItem;
          // Move to next position in results array
          currentIndex += 1;
        }
      }
      return items;
    }     function fetchItemsListed() public view returns (MarketItem[] memory){
      uint totalItemCount = _tokenIds.current();
      uint itemCount = 0;
      uint currentIndex = 0;
      
      // First loop: Count how many NFTs the caller is selling
      for (uint i = 0; i < totalItemCount; i++) {
        if (idToMarketItem[i + 1].seller == msg.sender) {
          itemCount += 1;
        }
      }
      
      // Create array to hold the NFTs listed by the caller
      MarketItem[] memory items = new MarketItem[](itemCount);
      
      // Second loop: Fill the array with the caller's listed NFTs
      for (uint i = 0; i < totalItemCount; i++) {
        if (idToMarketItem[i + 1].seller == msg.sender) {
          uint currentId = i + 1;
          MarketItem storage currentItem = idToMarketItem[currentId];
          items[currentIndex] = currentItem;
          currentIndex += 1;
        }
      }
      
      return items;
    }
 

}