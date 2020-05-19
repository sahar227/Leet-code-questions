/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const oldColor = image[sr][sc];
    if(oldColor === newColor)
        return image;
    return floodFillHelper(image, sr, sc, newColor, oldColor);
};

function floodFillHelper(image, sr, sc, newColor, oldColor) {
    image[sr][sc] = newColor;
    if(!checkBoundaries(image, sr, sc)) return image;
    if(checkBoundaries(image, sr + 1, sc) && image[sr + 1][sc] === oldColor)
        floodFillHelper(image, sr + 1, sc, newColor, oldColor);
    if(checkBoundaries(image, sr, sc + 1) && image[sr][sc + 1] === oldColor)
        floodFillHelper(image, sr, sc + 1, newColor, oldColor);
    if(checkBoundaries(image, sr - 1, sc) && image[sr - 1][sc] === oldColor)
        floodFillHelper(image, sr - 1, sc, newColor, oldColor);
    if(checkBoundaries(image, sr, sc - 1) && image[sr][sc - 1] === oldColor)
        floodFillHelper(image, sr, sc - 1, newColor, oldColor);
        
    return image;
}

function checkBoundaries(image, row, column) {
    if( image.length <= row || row < 0 ) return false;    
    if( image[row].length <= column || column < 0 ) return false;    
    return true;
}


// const newImage = floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2);
const newImage = floodFill([[0,0,0],[0,1,1]], 1, 1, 1);
console.log(newImage);
