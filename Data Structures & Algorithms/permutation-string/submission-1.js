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

        for (const c of s1) {
            need[c.charCodeAt(0) - 97]++;
        }

        let matches = 0;

        for (let i = 0; i < 26; i++) {
            if (need[i] === window[i]) {
                matches++;
            }
        }

        let left = 0;

        for (let right = 0; right < s2.length; right++) {
            const r = s2.charCodeAt(right) - 97;

            // Add right character
            if (window[r] === need[r]) {
                matches--;
            }

            window[r]++;

            if (window[r] === need[r]) {
                matches++;
            }

            if (right - left + 1 > s1.length) {
                const l = s2.charCodeAt(left) - 97;

                if (window[l] === need[l]) {
                    matches--;
                }

                window[l]--;

                if (window[l] === need[l]) {
                    matches++;
                }

                left++;
            }

            // All 26 character counts match
            if (matches === 26) {
                return true;
            }
        }

        return false;
    }
}
