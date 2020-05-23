/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    const intersections = [];
    let lastIntersectionFound = 0;
    for(let i = 0; i < A.length; i++) {
        for(let j = lastIntersectionFound; j < B.length; j++) {
            if(A[i][1] < B[j][0])
                break;
            const intersection = getIntersection(A[i], B[j]);
            lastIntersectionFound = j;
            if(intersection) {
                intersections.push(intersection);
            }
        }
    }
    return intersections;
};

function getIntersection(a, b) {
    const start = Math.max(a[0], b[0]);
    const end = Math.min(a[1], b[1]);
    if(start <= end) {
        return [start, end];
    }
    return null;
}


const A = [[0,2],[5,10],[13,23],[24,25]];
const B = [[1,5],[8,12],[15,24],[25,26]];

console.log(intervalIntersection(A,B));
