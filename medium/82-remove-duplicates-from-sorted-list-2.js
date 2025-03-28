function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

var deleteDuplicates = function(head) {
  if (!head) return head;
  const dummy = new ListNode(0, head);
  let cur = head, next = head.next, prev = dummy;

  while (next) {
    if(next.val === cur.val) {
      while (next && next.val === cur.val) {
        next = next.next
      }
      cur = prev;
      cur.next = next ? next : null;
    }
    prev = cur;
    cur = cur.next;
    next = next ? next.next : null;
  }

  return dummy.next;
  
  // const map = new Map();
  // let dummy = head;
  // while(dummy){
  //   map.set(dummy.val, map.has(dummy.val) ? map.get(dummy.val) + 1 : 1);
  //   dummy = dummy.next;
  // }

  // dummy = new ListNode(null, head);
  // let dummy2 = dummy;
  // while(dummy2.next){
  //   while(dummy2.next && map.get(dummy2.next.val) > 1){
  //     const temp = dummy2.next.next;
  //     dummy2.next = temp;
  //   }
  //   dummy2 = dummy2.next ? dummy2.next : dummy2;
  // }
  // return dummy.next;
};

const input = new ListNode(1);
input.next = new ListNode(1);
input.next.next = new ListNode(1);
input.next.next.next = new ListNode(2);
input.next.next.next.next = new ListNode(3);
console.log(deleteDuplicates(input));