import React from 'react';

const Banner = ({ name, childStyle, parentStyles }) => (
  <div className={`relative w-full flex items-center z-0 overflow-hidden nft-gradient ${parentStyles}`}>
    <p className={`font-poppins font-bold text-5xl leading ${childStyle} `}>{name}</p>
    <div className="absolute w-48 h-48 sm:w-36 sm:h-36 rounded-full white-bg -top-9 -left-16 -z-5" />
    <div className="absolute w-72 h-72 sm:w-56 sm:h-56 rounded-full white-bg top-9 -right-16 -z-5" />

  </div>

);
export default Banner;
