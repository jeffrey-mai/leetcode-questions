function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var MyHashSet = function () {
  this.linkedList = new ListNode(-1);
};

MyHashSet.prototype.add = function (key) {
  key = new ListNode(key);
  let temp = this.linkedList;
  while (temp.next) {
    temp = temp.next;
  }
  temp.next = key;
  return this.linkedList;
};

MyHashSet.prototype.remove = function (key) {
  key = new ListNode(key);
  let newList = new ListNode(0, this.linkedList), curr = newList;
  while (curr.next) {
    if (curr.next.val === key.val) curr.next = curr.next.next;
    else curr = curr.next;
  }
  this.linkedList = newList.next;
  return this.linkedList;
};

MyHashSet.prototype.contains = function (key) {
  key = new ListNode(key);
  let curr = this.linkedList;
  while (curr) {
    if (curr.val === key.val) return true;
    curr = curr.next;
  }
  return false;
};

const test = new MyHashSet();
test.add(1);
test.add(2);
console.log(test.linkedList);
console.log(test.contains(1));
console.log(test.contains(3));