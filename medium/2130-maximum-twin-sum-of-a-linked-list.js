var pairSum = function(head) {
  let ans = 0, slowPtr = head, fastPtr = head, firstHalfOfList = null;

  // setting up firstHalfOfList in a way to add their twins
  // and stopping when fastPtr reaches to the end of Linked List
  // which naturally puts the slowPtr at the middle of the list.
  while(fastPtr && fastPtr.next){
    fastPtr = fastPtr.next.next;
    const temp = slowPtr.next;
    slowPtr.next = firstHalfOfList;
    firstHalfOfList = slowPtr;
    slowPtr = temp;
  }

  // Finding the max sum of twins
  while(slowPtr){
    ans = Math.max(ans, firstHalfOfList.val + slowPtr.val);
    firstHalfOfList = firstHalfOfList.next;
    slowPtr = slowPtr.next;
  }

  return ans;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}