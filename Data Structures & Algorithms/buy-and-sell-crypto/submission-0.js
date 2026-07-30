class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minIndex = 0;
        let higestProfit =  0 

        for(let i=0; i<prices.length; i++ ){
            if(prices[i] < prices[minIndex]){
                minIndex = i
                console.log(minIndex)
            }
            let currentProfit = prices[i] - prices[minIndex]
            higestProfit = Math.max(higestProfit , currentProfit)
        }
        return higestProfit
    }
} 
