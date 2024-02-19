
class TimeMap {
  map: Map<string, [number, string][]>;

  constructor() {
    this.map = new Map(); 
  }

  set(key: string, value: string, timestamp: number): void {
    const keyVals = this.map.has(key) ? this.map.get(key) : [];
    if(keyVals){
      keyVals.push([timestamp, value]);
      this.map.set(key, keyVals);
    }
  }

  get(key: string, timestamp: number): string {
    const keyTimestamps = this.map.has(key) ? this.map.get(key) : [];
    let left = 0, mid, ts = null;
    if(keyTimestamps){
      let right = keyTimestamps.length - 1;
      while(left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if(keyTimestamps[mid][0] <= timestamp) {
          ts = keyTimestamps[mid][1];
          left = mid + 1;
        } else right = mid - 1;
      }
    }
    return ts === null ? "" : ts;
  }
}

export default TimeMap;