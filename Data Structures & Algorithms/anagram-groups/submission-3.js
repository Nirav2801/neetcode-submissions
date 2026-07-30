class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    const map = new Map(); // O(1) space initialization

    for (const str of strs) { // Outer loop: runs n times -> O(n)
      const count = new Array(26).fill(0); // O(26) -> O(1)

      for (const ch of str) { // Inner loop: runs m times for each string -> O(m)
        count[ch.charCodeAt(0) - 97]++; // O(1) character calculation + array update
      }

      const key = String(count); // O(26) -> O(1), because alphabet size is fixed

      if (!map.has(key)) { // O(1) 
        map.set(key, []); // O(1) 
      }

      map.get(key).push(str); // O(1)
    }

    return [...map.values()]; // O(k)
    }
}
/*
Overall Time Complexity:

Outer loop and Inner loop = O(n) ,O(m)

Nested loops: O(n * m)

count = O(1)
Map operations = O(1)

Return = O(k)

Total: O(n * m + k)

Since k <= n and n * m dominates - Final Time Complexity = O(n * m)

Space Complexity:

count array = O(26) = O(1)

Map stores all strings: O(n * m)

Final Space Complexity = O(n * m)
*/
