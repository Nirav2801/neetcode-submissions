class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      const set = new Set(nums);
      let longest = 0;

      for (const element of nums) {
            if(!set.has(element - 1)){
                let length = 1;
                while (set.has(element + length)) {
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
      return longest
    }
}
