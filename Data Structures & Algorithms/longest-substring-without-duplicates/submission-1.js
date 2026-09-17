class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map();
        let left = 0 
        let largestLength = 0
        for (let i = 0; i < s.length; i++) { 
            if(map.has(s[i])){
              left = Math.max(left , map.get(s[i]) + 1)
            }
            map.set(s[i],i)
            largestLength = Math.max(largestLength, i - left + 1)
        }
        
        return largestLength
    }
}
