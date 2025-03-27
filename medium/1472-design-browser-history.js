function ListNode(val, next, prev) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
  this.prev = (prev===undefined ? null : prev)
}

var BrowserHistory = function(homepage) {
  this.currentPage = new ListNode(homepage);
};

BrowserHistory.prototype.visit = function(url) {
  this.currentPage.next = new ListNode(url, null, this.currentPage);
  this.currentPage = this.currentPage.next;
};

BrowserHistory.prototype.back = function(steps) {
  while(this.currentPage.prev && steps--){
    this.currentPage = this.currentPage.prev;
  }
  return this.currentPage.val;
};

BrowserHistory.prototype.forward = function(steps) {
  while(this.currentPage.next && steps--){
    this.currentPage = this.currentPage.next;
  }
  return this.currentPage.val;
};

const test = new BrowserHistory("leetcode.com");
test.visit("google.com");
test.visit("facebook.com");
test.visit("youtube.com");
test.back(2);
test.visit("youtube.com");
test.back(1);
console.log(test.currentPage.val);
console.log(test.currentPage);
