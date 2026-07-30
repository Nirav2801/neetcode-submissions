class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encoded = ""; // O(1)

    for (const str of strs) { // O(n)
      encoded += str.length + "#" + str;
    }
    
    return encoded; // O(1)
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const result = []; // O(1)

    let i = 0; // O(1)

    while (i < str.length) { // Overall O(m)

      let j = i; // O(1)

      while (str[j] !== "#") { //O(m)
        j++;
      }

      const length = Number(str.slice(i, j)); //O(1)

      const start = j + 1; // O(1)

      result.push(str.slice(start, start + length));
      // slice copies exactly 'length' characters.
      // Across the whole algorithm every character is copied once.
      // Total = O(m)

      i = start + length; // O(1)
    }

    return result; // O(1)
  }
}

/*
-----------------------------------------
Encode Time Complexity
-----------------------------------------

Loop through all strings = O(n)

Copy all characters into encoded string = O(m)

Total:O(n + m)

Since m (total characters) dominates when strings are long,

Final Time Complexity = O(m)

-----------------------------------------
Decode Time Complexity
-----------------------------------------

Outer while loop = Visits every encoded section

Finding '#' = O(m)
slice(i, j) for length digits = O(d)

Copy decoded string using slice() = O(m)

Total:O(m + d + m)

Since d (number of digits) is tiny compared to m,Final Time Complexity = O(m)
*/