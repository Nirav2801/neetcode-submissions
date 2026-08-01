class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    const stack = [];
    const pairs = {
      ")": "(",
      "]": "[",
      "}": "{",
    };

    for (const element of s) {
      if (pairs[element] && pairs[element] === stack[stack.length - 1]) {
        stack.pop()
      } else {
        stack.push(element);
      }
    }
    return stack.length === 0;
    }
}
