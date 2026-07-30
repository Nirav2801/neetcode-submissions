class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    const stack = [];

        const pairs = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (const char of s) {
            console.log(pairs[char])
            if (!pairs[char]) {
                stack.push(char);

            } 
            else {
                if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) {
                    return false;
                }
                stack.pop();
            }
        }

        return stack.length === 0;
    }
}
