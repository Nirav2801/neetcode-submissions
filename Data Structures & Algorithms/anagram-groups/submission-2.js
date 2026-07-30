class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    const map = new Map();

    for (const element of strs) {
      const word = element.split("").sort().join("");

      const key = map.get(word) || [];
      key.push(element);

      map.set(word, key);
    }
    return [...map.values()];
    }
}
