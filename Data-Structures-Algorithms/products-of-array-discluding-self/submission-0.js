class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {    
      const result = new Array(nums.length).fill(1)  
        let prefix = 1
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            result[i] = prefix
            prefix *= element 
        }
        
        let suffix = 1
        for (let i = nums.length - 1 ; i >= 0; i--) {
            const element = nums[i];
            result[i] *= suffix
            suffix *= element 
        }
      return result
      }
}
