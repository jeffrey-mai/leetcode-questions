var predictPartyVictory = function(senate) {
  const rad = [], dire = [], n = senate.length;

  // Initialize the queues for Radiant and Dire
  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') rad.push(i);
    else dire.push(i);
  }

  // Simulate the voting process
  while (rad.length > 0 && dire.length > 0) {
    const r = rad.shift(), d = dire.shift();
    // The senator with the smaller index gets to ban the other
    if (r < d) rad.push(r + n);
    else dire.push(d + n);
  }

  return rad.length > 0 ? 'Radiant' : 'Dire';
};

console.log(predictPartyVictory("DRRDRDRDRDDRDRDR"));