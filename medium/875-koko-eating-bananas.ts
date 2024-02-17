// 

const canEatAll = (piles: number[], speed: number, h: number) => {
  let totalTime = 0;
  for (const bananas of piles) {
    totalTime += Math.ceil(bananas / speed);
    if(totalTime > h) return false;
  }
  return true;
};

function minEatingSpeed(piles: number[], h: number): number {
  let left = 1, right = Math.max(...piles);
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if(canEatAll(piles, mid, h)) right = mid - 1;
    else left = mid + 1;
  }
  return left;
};

export default minEatingSpeed;