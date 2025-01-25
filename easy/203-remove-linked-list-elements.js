var removeElements = function(head, val) {
  let ans = new ListNode(null, head), curr = ans;
  while(curr.next){
    if(curr.next === val) curr.next = curr.next.next;
    else curr = curr.next;
  }
  return ans.next;
};