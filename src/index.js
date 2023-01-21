module.exports = function check(str, bracketsConfig) {
  const openBrackets = ["(", "{", "[", "|", "1", "3", "5", "7", "8"];
  const bracketsPair = {
    [")"]: "(",
    ["}"]: "{",
    ["]"]: "[",
    ["|"]: "|",
    ["1"]: "2",
    ["3"]: "4",
    ["5"]: "6",
    ["7"]: "7",
    ["8"]: "8",
  };
  let stack = [];

  function checkBrackets(str) {
    for (i = 0; i < str.length; i++) {
      let symbol = str[i];
      if (openBrackets.includes(symbol)) {
        stack.push(symbol);
      } else {
        if (stack.length === 0) {
          return false;
        }

        let lastSymbol = stack[stack.length - 1];

        if (bracketsPair[symbol] === lastSymbol) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  return checkBrackets(str);
};
