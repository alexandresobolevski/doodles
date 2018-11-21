function isValid(str) {
  const openParens = ['(', '[', '{'];
  const closeParens = [')', ']', '}'];
  const stack = [];

  if (str.length === 0) return true;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const indexOfOpenParen = openParens.indexOf(char);
    const indexOfCloseParen = closeParens.indexOf(char);

    if (indexOfOpenParen > -1) {
      stack.push(indexOfOpenParen);
    }

    if (indexOfCloseParen > -1) {
      const latestOpenParenIndex = stack.pop();

      if (indexOfCloseParen !== latestOpenParenIndex) {
        return false;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
}

console.log(isValid('([)]')); // false
