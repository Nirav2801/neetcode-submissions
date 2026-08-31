class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(char){
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        )
    }

    isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      while (left < right && !this.isAlphanumeric(s[left])) {
        left++;
      }
      while (left < right && !this.isAlphanumeric(s[right])) {
        right--;
      }
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
    return true;
    }
}
