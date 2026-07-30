class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
    let min = 0;
    let max = nums.length - 1;

    while (min <= max) {
      let mid = Math.floor(min + (max - min) / 2);

      if (nums[mid] == target) {
        return mid;
      }

      if (target < nums[mid]) {
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    }
    return -1;
    }
}
