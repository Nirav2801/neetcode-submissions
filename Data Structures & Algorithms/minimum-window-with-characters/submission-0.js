class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
    const need = new Map();
    const window = new Map();

    for (const char of t) {
      need.set(char, (need.get(char) || 0) + 1);
    }

    let left = 0;
    let required = t.length;

    let minLength = Infinity;
    let minStart = 0;

    for (let right = 0; right < s.length; right++) {
      const char = s[right];

      window.set(char, (window.get(char) || 0) + 1);

      if (need.has(char) && window.get(char) <= need.get(char)) {
        required--;
      }

      while (required === 0) {
        const windowLength = right - left + 1;

        if (windowLength < minLength) {
          minLength = windowLength;
          minStart = left;
        }

        const leftChar = s[left];

        window.set(leftChar, window.get(leftChar) - 1);

        if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
          required++;
        }

        left++;
      }
    }
    return minLength === Infinity
      ? ""
      : s.slice(minStart, minStart + minLength);
    }
}
