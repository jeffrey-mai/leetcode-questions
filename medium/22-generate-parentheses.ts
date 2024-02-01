// 

function generateParenthesis(n: number): string[] {
  const output: Array<string> = [];
    const dfs = (str: string, open: number, close: number) => {
      if (open > close) return;
      if (open === 0 && close === 0) {
        output.push(str);
        return;
      }
      if (open > 0) dfs(`${str}(`, open - 1, close);
      if (close > 0) dfs(`${str})`, open, close - 1);
    };
    dfs('', n, n);
    return output;
};

export default generateParenthesis;