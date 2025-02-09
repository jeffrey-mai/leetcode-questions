function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var swapPairs = function(head) {
  let dummy = new ListNode(0, head);
  let prev = dummy, cur = head;

  while (cur && cur.next) {
    let npn = cur.next.next;
    let second = cur.next;

    cur.next = npn;
    second.next = cur;
    prev.next = second;

    prev = cur;
    cur = npn;
  }

  return dummy.next;    
};

const test = new ListNode(1);
test.next = new ListNode(2);
test.next.next = new ListNode(3);
test.next.next.next = new ListNode(4);

console.log(swapPairs(test));