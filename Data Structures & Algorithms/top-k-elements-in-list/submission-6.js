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
    if (Object.keys(basket).length == 1) return [Number(Object.keys(basket))]

    const keys =  Object.keys(basket)
    keys.sort((a, b) => basket[b] - basket[a]) 
    return keys.slice(0, k).map(Number);
    }
}
