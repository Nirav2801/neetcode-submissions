class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let map = new Map(); // O(1) space initialization

    for (const element of nums) {//  O(n)
      map.set(element, (map.get(element) || 0) + 1); // O(1)
    }

    const buckets = [...Array(nums.length + 1)].map(() => []); // Array creation: O(n) +  map(() => []): O(n) ->  Total: O(n)

    for (const [num, freq] of map.entries()) {// O(u)
      buckets[freq].push(Number(num)); // O(1)
    }

    const result = []; // O(1)
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {//O(n)
      const element = buckets[i]; // O(1)

      if (element.length > 0) {// O(1)
        result.push(...element); // O(u)
      }
    }

    return result.slice(0, k); // O(k)
  }
}

/* Overall Time Complexity:

Frequency map creation = O(n)
Bucket array creation = O(n)
Fill buckets = O(u)
Scan buckets = O(n)
Push unique elements into result = O(u)
Return slice = O(k)

Total:
O(n + n + u + n + u + k) Since u ≤ n and k ≤ n,= O(5n)
Final Time Complexity = O(n)


Space Complexity:

Map stores frequencies = O(u)
Bucket array = O(n)
Result array = O(k)

Total:O(u + n + k)
Since u ≤ n and k ≤ n,Final Space Complexity = O(n)
*/