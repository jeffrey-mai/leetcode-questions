function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var reverseList = function(head) {
  let node = null;
  while (head) {
    const temp = head.next;
    head.next = node;
    node = head;
    head = temp;
  }
  return node; 
};