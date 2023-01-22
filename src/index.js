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
    if (stack.includes("|") || stack.includes("7") || stack.includes("8")) {
      for (k = 0; k < stack.length; k++) {
        let stackSymbol = stack[k];
        let lastStackSymbol = stack[stack.length - 1];
        if (bracketsPair[stackSymbol] === lastStackSymbol) {
          stack.splice(stack.indexOf(stack[k]));
          stack.pop();
        } else {
          return false;
        }
      }
    } else {
      return stack.length === 0;
    }
    return stack.length === 0;
  }
  return checkBrackets(str);
};
