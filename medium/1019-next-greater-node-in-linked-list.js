function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

var nextLargerNodes = function(head) {
  const cache = [], ans = [];
  while (head) {
    ans.push(0);
    while (cache.length && cache[cache.length - 1][0] < head.val) {
      ans[cache[cache.length - 1][1]] = head.val;
      cache.pop();
    }
    cache.push([head.val, ans.length-1]);
    head = head.next;
  }
  return ans;
};

