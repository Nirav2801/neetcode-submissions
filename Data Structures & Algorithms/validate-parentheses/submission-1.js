class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    const stack = [];
    const pair = {
       ")": "(",
       "}": "{",
       "]": "[",
    };
    for (const char of s) {
        if(char === '(' ||char === '{' ||char === '[' ){
            stack.push(char)
            continue;
        }  

        if (stack.length === 0) {
            return false;
        }

        if (stack.pop() !== pair[char]) {
            return false
        }
       
    }
        return stack.length === 0;
    }
}
