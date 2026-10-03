class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    const need = new Array(26).fill(0);
    const window = new Array(26).fill(0);

    for (const char of s1) {
      need[char.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < s2.length; i++) {
      window[s2.charCodeAt(i) - 97]++;

      if(i >= s1.length){
        window[s2.charCodeAt(i-s1.length) - 97]--
      }

      if (need.toString() === window.toString()) return true;
    }
    return false;
    }
}
