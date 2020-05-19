
var StockSpanner = function() {
    this.priceStreaks = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    const priceStreak = {price, streak: 1};
    while(this.priceStreaks.length) {
        const latestPriceStreak = this.priceStreaks[this.priceStreaks.length - 1];
        if(latestPriceStreak.price <= price) {
            
            priceStreak.streak += latestPriceStreak.streak;
            this.priceStreaks.pop();
        }
        else
            break;
    }

    this.priceStreaks.push(priceStreak);
    return priceStreak.streak;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */