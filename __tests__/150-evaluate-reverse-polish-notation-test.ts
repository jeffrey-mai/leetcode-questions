import evalRPN from '../medium/150-evaluate-reverse-polish-notation';

describe('150-evaluate-reverse-polish-notation test', () => {
  it('input: ["2","1","+","3","*"]', () => {
    expect(evalRPN(["2","1","+","3","*"])).toEqual(9);
  })

  it('input: ["4","13","5","/","+"]', () => {
    expect(evalRPN(["4","13","5","/","+"])).toEqual(6);
  })

  it('input: ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]', () => {
    expect(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
      .toEqual(22);
  })
})