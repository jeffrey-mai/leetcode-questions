var RecentCounter = function() {
  this.pings = [];
};

RecentCounter.prototype.ping = function(t) {
  this.pings.push(t);
  while(this.pings[0] < t - 3000){
    this.pings.shift();
  }
  return this.pings.length;
};

const test = new RecentCounter();
console.log(test.ping(1));
console.log(test.ping(100));
console.log(test.ping(3001));
console.log(test.ping(3002));