function maxProfit(prices: number[]): number {
  let left = 0, ans = 0;
  for(let i = 0; i < prices.length-1; i++){
    let right = i+1;
    if(prices[left] < prices[right]) ans = Math.max(ans, prices[right] - prices[left]);
    else left = right;
  }
  return ans;
};

console.log(maxProfit([1,2,4,2,5,7,2,4,9,0,9]));

export default maxProfit;