export const getTopMarketSellers = (array) => {
  const creatorStats = [];

  const groupedBySeller = array.reduce((res, currentValue) => {
    (res[currentValue.seller] = res[currentValue.seller] || []).push(currentValue);
    return res;
  }, {});

  Object.entries(groupedBySeller).forEach((item) => {
    const seller = item[0];
    const totalSalesValue = item[1]
      .map((nft) => Number(nft.price))
      .reduce((prev, curr) => prev + curr, 0);

    creatorStats.push({ seller, sumall: totalSalesValue });
  });

  // Sort by total sales value (highest first) and limit to top 4
  return creatorStats
    .sort((a, b) => b.sumall - a.sumall)
    .slice(0, 4);
};
