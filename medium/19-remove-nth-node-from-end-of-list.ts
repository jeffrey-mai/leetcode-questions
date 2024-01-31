// 

// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null | undefined
  constructor(val?: number, next?: ListNode | null | undefined) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function removeNthFromEnd(head: ListNode | null | undefined, n: number): ListNode | null | undefined {
  // two pointer, with first one n steps ahead
  const preNode = new ListNode(0, head);
  let frontNode: ListNode | null | undefined = preNode;
  let backNode: ListNode | null | undefined = preNode;

  for (let i = 0; i < n; i++) {
    backNode = backNode?.next;
  }
  while(backNode?.next) {
    frontNode = frontNode?.next;
    backNode = backNode.next;
  }
  if(frontNode && frontNode.next) frontNode.next = frontNode.next.next;
  return preNode.next;
};

const test = new ListNode(1);

console.log(removeNthFromEnd(test, 1));
console.log(test);

export default removeNthFromEnd;