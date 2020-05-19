/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    for(let i = 0; i < k; i++) {
        if(num.length <= k - i || num.length === 0)
            return "0";
        let hasRemoved = false;
        for(let j = 0; j < num.length - 1; j++) {
            if(num[j] > num[j + 1]) {
                num = num.slice(0,j) + num.slice(j + 1, num.length);
                hasRemoved = true;
                break;
            }
        }
        if(!hasRemoved)
            num = num.slice(0, num.length - 1);
        num = removeLeadingZeros(num);
    }
    return num.length > 0 ? num : '0';
};

function removeLeadingZeros(num) {
    let newNum = num;
    while(newNum[0] === '0')
        newNum = newNum.substring(1);
    return newNum;
}


console.log(removeKdigits("1432219", 3));
console.log(removeKdigits("10200", 1));
console.log(removeKdigits("10", 1));
console.log(removeKdigits("112", 1));
