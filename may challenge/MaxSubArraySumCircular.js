/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
    const first = bestSumInSubArray(A);
    const second = arraySumWithoutWorstSubArray(A);
    return Math.max(first, second);
}

function bestSumInSubArray(A) {
    let curr = A[0];
    let maxSum = A[0];

    for(let i = 1; i < A.length; i++) {
        curr = Math.max(A[i], curr + A[i]);
        maxSum = Math.max(maxSum, curr);
    }
    return maxSum;
}

function arraySumWithoutWorstSubArray(A) {
    if(A.length < 3)
        return A.reduce((a,b) => a+b, 0);
    const relevantArray = A.slice(1, A.length - 1);
    const worstSumsPerIndex = [];
    let minSum = relevantArray[0];
    let arraySum = relevantArray[0] + A[0] + A[A.length - 1];
    
    worstSumsPerIndex[0] = relevantArray[0];
    for(let i = 1; i < relevantArray.length; i++) {
        worstSumsPerIndex[i] = Math.min(relevantArray[i], worstSumsPerIndex[i-1] + relevantArray[i]);
        minSum = Math.min(minSum, worstSumsPerIndex[i]);
        arraySum += relevantArray[i];
    }

    return arraySum - minSum;
}

console.log(maxSubarraySumCircular([1,-2,3,-2]));
console.log(maxSubarraySumCircular([5,-3,5]));
console.log(maxSubarraySumCircular([3,-1,2,-1]));
console.log(maxSubarraySumCircular([3,-2,2,-3]));
console.log(maxSubarraySumCircular([-2,-3,-1]));
console.log(maxSubarraySumCircular([-2]));
