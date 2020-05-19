/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubarraySumCircular = function(A) {
    const sum = A.reduce((a,b) => a+b, 0);
    const case1 = kadane(A, 0, A.length - 2, 1);
    const case2 = sum + kadane(A, 1, A.length - 1, -1);
    
    return Math.max(case1, case2);
}

function kadane(nums, i, j, sign) {
    if (i > j) return 0;
    
    let cur = sign * nums[i];
    let max = sign * nums[i];
    
    for(let k = i + 1; k <= j; k++) {
        let val = sign * nums[k];
        cur = Math.max(cur + val, val);
        max = Math.max(max, cur);
    }
    return max;
}



console.log(maxSubarraySumCircular([1,-2,3,-2]));
console.log(maxSubarraySumCircular([5,-3,5]));
console.log(maxSubarraySumCircular([3,-1,2,-1]));
console.log(maxSubarraySumCircular([3,-2,2,-3]));
console.log(maxSubarraySumCircular([-2,-3,-1]));
console.log(maxSubarraySumCircular([-2]));
