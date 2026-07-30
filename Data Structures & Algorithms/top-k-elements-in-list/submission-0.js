class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    const freqMap = {};
    for (const element of nums) {
      freqMap[element] = (freqMap[element] || 0) + 1;
    }

    const buckets = Array.from({ length: nums.length + 1 }, () => []);

    for (const [num, freq] of Object.entries(freqMap)) {
      buckets[freq].push(Number(num));
    }
    const result = [];
     for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
      if (buckets[i].length > 0) {
        result.push(...buckets[i]);
      }
    }
    return result.slice(0, k);
    }
}
