// 

interface Stack {
  val: number,
  min: number
}

class MinStack {
  public stack: Stack[];
  
  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    this.stack.push({
      val,
      min: this.stack.length == 0 ? val: Math.min(val, this.getMin())
    });
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].val;
  }

  getMin(): number {
    return this.stack.length == 0 ? 0: this.stack[this.stack.length - 1].min;
  }
}

const test = new MinStack();
test.push(-2);
test.push(0);
test.push(-3);
console.log(test.getMin());
test.pop();
console.log(test.top());
console.log(test.getMin());

export default MinStack;