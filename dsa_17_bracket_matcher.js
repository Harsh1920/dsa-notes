function bracketMatcher(str) {
  let counter = 0;

  for (let char of str) {
    if (char === "(") {
      counter++;
    } else if (char === ")") {
      counter--;
    }
    if (counter < 0) {
      return 0;
    }
  }

  return counter === 0 ? 1 : 0;
}

const result = bracketMatcher("(hello (world))");
