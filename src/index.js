module.exports = function check(str, bracketsConfig) {
  const openBrackets = ["(", "{", "[", "|", "1", "3", "5", "7", "8"];
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
        for (i = 0; i < bracketsConfig.length; i++) {
          if (bracketsConfig[i][0] === lastSymbol) {
            stack.pop();
          } else {
            return false;
          }
        }
      }
    }
  }
  checkBrackets(str);
  return stack.length === 0;
};
