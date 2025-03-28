function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

var rotateRight = function(head, k) {
  if (!head || !head.next) return head;
  let tail = head, length = 1;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  tail.next = head;
  k = length - k % length;
  for (let i = 0; i < k; i++) {
    tail = tail.next;
  }
  head = tail.next;
  tail.next = null;
  return head;
};

const input = new ListNode(0);
input.next = new ListNode(1);
input.next.next = new ListNode(2);
console.log(rotateRight(input, 4))