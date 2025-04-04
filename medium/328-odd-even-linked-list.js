function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var oddEvenList = function(head) {
  if (head === null || head.next === null) return head;
  let odd = head, even = head.next, evenHead = even;
  while (even !== null && even.next !== null) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};