/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    num = removeLeadingZeros(num);
    if(num.length <= k || num.length === 0)
        return "0";
    if(k === 0)
        return num;
    
    for(let i = 0; i < num.length - 1; i++) {
        if(num[i] > num[i + 1])
        {
            const newNum = num.slice(0,i) + num.slice(i + 1, num.length);
            return removeKdigits(newNum, k - 1);
        }
    }
    return removeKdigits(num.slice(0, num.length - 1), k - 1); 
};

function removeLeadingZeros(num) {
    let newNum = num;
    while(newNum[0] === '0')
        newNum = newNum.substring(1);
    return newNum;
}


console.log(removeKdigits("1432219", 3));
console.log(removeKdigits("10200", 1));
console.log(removeKdigits("10", 2));
console.log(removeKdigits("112", 1));
