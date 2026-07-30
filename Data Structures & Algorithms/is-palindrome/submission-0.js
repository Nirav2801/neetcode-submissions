class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const word = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        const reverseString = word.split('').reverse().join('')
        return word === reverseString;
    }
}
