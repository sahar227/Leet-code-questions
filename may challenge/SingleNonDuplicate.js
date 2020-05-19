/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if(nums.length === 1)
        return nums[0];

    let startIndex = 0;
    let endIndex = nums.length - 1;
    while(true) {
        const middleIndex = getMiddleIndex(nums, startIndex, endIndex);
        if(nums[middleIndex] !== nums[middleIndex - 1])
            return nums[middleIndex];
        if(middleIndex % 2 === 0)
            endIndex = middleIndex - 2;
        else
            startIndex = middleIndex + 1;
    }
};

function getMiddleIndex(nums, startIndex, endIndex) {
    let middleIndex = (endIndex + startIndex) / 2;
    if(nums[middleIndex] === nums[middleIndex + 1])
        middleIndex++;
    return middleIndex;
}

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate([3,3,7,7,10,11,11]));
