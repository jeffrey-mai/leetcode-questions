var getDecimalValue = function(head) {
  let binary = "", ans = 0;
  while(head){
    binary += head.val;
    head = head.next;
  }

  const length = binary.length;
  for(let i = 0; i < length; i++){
    if(binary[i] === "1"){
      ans += Math.pow(2, length-i-1);
      console.log(ans);
    }
  }
  return ans;
};
