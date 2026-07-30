class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let higestProfit =  0 

        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            } else {
                higestProfit = Math.max(higestProfit, prices[i] - minPrice);
            }
        }
        return higestProfit
    }
} 
