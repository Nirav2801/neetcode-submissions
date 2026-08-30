class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) { 
        let stack = []
         let maxArea = 0 

         heights.push(0)
         for (let i = 0; i < heights.length; i++) {
            while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
                let height = heights[stack.pop()]
                let width 

                if (stack.length === 0) {
                    width = i 
                } else {
                    width = i - stack[stack.length-1] - 1
                }

                let area = height * width

                maxArea = Math.max(maxArea ,area)
            }            
            stack.push(i)
         }
         return maxArea
        }
}
