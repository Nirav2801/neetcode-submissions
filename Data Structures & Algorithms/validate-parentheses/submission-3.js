class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
     const stack = [];

    const inverseParentheses = (str) => {
      switch (str) {
        case ')':
          return '(';
        case ']':
          return '[';
        case '}':
          return '{';
        default:
          return '';
      }
    };

    for (let char of s) {
      if (inverseParentheses(char) === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(char);
      }
    }

    return stack.length === 0;
    }
}
