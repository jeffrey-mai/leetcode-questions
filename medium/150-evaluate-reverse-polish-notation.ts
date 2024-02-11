// 

interface OperandMapping {
  [key: string]: (a: number, b: number) => number;
}

const operandMapping: OperandMapping = {
  '+': (a, b)=> a+b,
  '-': (a, b) => a-b,
  '*': (a, b) => a*b,
  '/': (a, b) => Math.trunc(a/b),
}

function evalRPN(tokens: string[]): number {
  // const stack: number[] = [];
  // for(const ele of tokens){
  //   if(ele === "+"){
  //     if(stack.length < 2) stack[0] = 0;
  //     else stack.push((stack.pop() as number) + (stack.pop() as number));
  //   }
  //   else if(ele === "-"){
  //     if(stack.length < 2) stack[0] = 0;
  //     else{
  //       const temp = (stack.pop() as number);
  //       stack.push((stack.pop() as number) - temp);
  //     }
  //   }
  //   else if(ele === "/"){
  //     if(stack.length < 2) stack[0] = 0;
  //     else{
  //       const temp = stack.pop() as number;
  //       const temp2 = stack.pop() as number;
  //       const divNum = temp2 / temp;
  //       divNum < 0 ? stack.push(Math.ceil(divNum)) : stack.push(Math.floor(divNum));
  //     }
  //   }
  //   else if(ele === "*"){
  //     console.log(stack.length);
  //     if(stack.length < 2) stack[0] = 0;
  //     else stack.push((stack.pop() as number) * (stack.pop() as number));
  //   }
  //   else stack.push(Number(ele));
  //   console.log(stack);
  // }
  // return stack[0];

  let evalStack: number[] = [];
  for(let token of tokens) {
    if (token in operandMapping) {
      const b = evalStack.pop();
      const a = evalStack.pop();
      if(a !== undefined && b !== undefined){
        const operationRes = operandMapping[token](a,b);
        evalStack.push(operationRes);
      } else {
        throw new Error('Insufficient operands in stack for operation');
      }
    } 
    else evalStack.push(Number(token));
  }
  return evalStack[0]
};

console.log(evalRPN(["4","13","5","/","+"]));

export default evalRPN;