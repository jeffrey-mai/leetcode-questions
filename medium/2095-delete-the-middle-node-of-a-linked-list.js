function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var deleteMiddle = function(head) {
  if (!head || !head.next) return null;
  let slow = head
  let fast = head
  while (fast && fast.next) {
      fast = fast.next.next
      if (fast && fast.next) slow = slow.next;
  }
  slow.next = slow.next.next;
  return head
};

console.log(deleteMiddle([1,3,4,7,1,2,6]));