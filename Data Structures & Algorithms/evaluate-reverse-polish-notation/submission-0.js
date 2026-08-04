class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
    const stack = [];
    for (const element of tokens) {
      if (
        element === "+" ||
        element === "-" ||
        element === "*" ||
        element === "/"
      ) {
        let b = stack.pop();
        let a = stack.pop();

        if (element === "+") {
          stack.push(a + b);
        } else if (element === "-") {
          stack.push(a - b);
        } else if (element === "*") {
          stack.push(a * b);
        } else {
          stack.push(Math.trunc(a / b));
        }
      } else {
        stack.push(Number(element));
      }
    }
    return stack.pop();
    }
}
