class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
    let left = 0;
    let result = [];
    let deque = [];

    for (let right = 0; right < nums.length; right++) {
      // Remove elements from the back that are smaller
      // than the current element
      while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[right]) {
        deque.pop();
      }

      // Add current index
      deque.push(right);

      // Remove indices that are outside the window
      if (deque[0] < left) {
        deque.shift();
      }

      // Window has reached size k
      if (right - left + 1 === k) {
        result.push(nums[deque[0]]);
        left++;
      }
    }

    return result;
    }
}
