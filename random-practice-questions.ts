// end of round; players lv up at certain rank
// equal scores between players will have same rank
// Player with score of 0 can't lv up regardless of rank

function numPlayers(k: number, scores: number[]): number{
  let ans = 0;
  scores.sort((a,b) => b-a);
  for(let i = 0; i < scores.length; i++){
    if(!ans || (ans < k && scores[i-1] >= scores[i])) ans++;
    else break;
  }
  return ans;
}

console.log(numPlayers(3, [100, 25, 50, 50]));