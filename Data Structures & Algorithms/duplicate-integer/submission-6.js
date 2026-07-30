class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {
     let temp = []
        for(let i=0 ; i<nums.length ; i++){
            if(temp.includes(nums[i])){
                return true
            }
             temp.push(nums[i])
           
        }
        return false
        }
    }