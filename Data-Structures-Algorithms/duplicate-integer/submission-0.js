class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

   hasDuplicate(nums) {
    let temp = new Set();
    for (const num of nums) {
      if (temp.has(num)) {
        return true;
      }
      temp.add(num);
    }
    return false;
    }
}