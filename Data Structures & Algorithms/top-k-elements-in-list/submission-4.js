class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    const basket = {};
    for (const element of nums) {
      console.log(element);
      basket[element] = (basket[element] || 0) + 1;
    }
    return Object.keys(basket)
      .sort((a, b) => basket[b] - basket[a]) 
      .slice(0, k)
      .map(Number);
    }
}
