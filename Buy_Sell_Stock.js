/** 
 *  Type I - Atmost one transaction is allowed.
 */
var maxProfit = function(prices) {

    /**
     *  initialising two variable max and min
     */
    var min = Number.MAX_SAFE_INTEGER;
    var max = 0;

    /**
     *  traversing the whole array
     *  price at index i will act as selling price 
     *  min will act as buying price
     *  max will be the maximum profit earned when buying price is minimum and selling price is maximum
     */
    for( let i = 0; i < prices.length; i++){ //---- O(N)
        /**
         *  min value can be minimum of current price value and min value
         */
        min = Math.min(min, prices[i]);
        /**
         *  max can be maximum of max til now and cureent price to sell - min value at which bought the stock
         */
        max = Math.max( max, prices[i]-min);
    }
return max;
    
};

/**
 *  time complexity is O(n) 
 *  space complexity is O(1)
 */
 
var prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));

// Note to apply max on Array use rest operator
// Math.max(...Array)
