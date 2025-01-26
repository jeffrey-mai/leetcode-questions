var removeNodes = function(head) {
  let cur = head, stack = [];
  
  while (cur !== null) {
    while (stack.length > 0 && stack[stack.length - 1].val < cur.val) {
      stack.pop();
    }
    stack.push(cur);
    cur = cur.next;
  }
  
  let nxt = null;
  while (stack.length > 0) {
    cur = stack.pop();
    cur.next = nxt;
    nxt = cur;
  }
  
  return cur;
};