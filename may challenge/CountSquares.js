/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let subSquaresCounter = 0;
    const rows = matrix.length;
    const columns = matrix[0].length;
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            subSquaresCounter += countSubSquaresFromIndex(matrix,rows, columns,  i, j);
        }
    }

    return subSquaresCounter;
};

function countSubSquaresFromIndex(matrix, rows, columns, startRow, startColumn) {
    let count = 0;
    let iteration = 0;
    while(iteration === count) {
        const endRow = startRow + iteration;
        const endColumn = startColumn + iteration;
        if(endRow >= rows || endColumn >= columns)
            break;
        let sum = 0;
        // calculate last row for iteration
        for(let i = startRow; i <= endRow; i++)
            sum += matrix[i][endColumn];
        // calculate last column for iteration
        for(let i = startColumn; i <= endColumn; i++)
            sum += matrix[endRow][i];

        if((sum - matrix[endRow][endColumn]) + (count * count) === (iteration + 1) * (iteration + 1))
            count++;
        iteration++;
    }
    return count;
}