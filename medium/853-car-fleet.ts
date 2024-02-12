// 

function carFleet(target: number, position: number[], speed: number[]): number {
  const n = speed.length, v = [], time = [];
  let curr = -Infinity, res = 0;
  
  for (let i = 0; i < n; i++) {
    v.push([position[i], speed[i]]);
  }
  v.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < n; i++) {
    time.push((target - v[i][0]) / v[i][1]);
  }

  for (let i = n - 1; i >= 0; i--) {
    if (time[i] > curr) {
      curr = time[i];
      res++;
    }
  }
  return res;
};

console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3]));

export default carFleet;