class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) { 
        const stack = []
        const result = new Array(temperatures.length).fill(0)

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const topItemIndex = stack.pop();
                result[topItemIndex] = i - topItemIndex;                
            }
            stack.push(i)
        }
        return result
    }
}