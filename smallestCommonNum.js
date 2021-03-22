// Given a matrix mat where every row is sorted in strictly increasing order, return the smallest common element in all rows.

// If there is no common element, return -1.

// Ex:
// Input: mat = [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]
// Output: 5

/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
  // process each row and increment num frequency in a hash
  // find smallest number in has where its count === mat.length
  let frequencyTable = {}
  let matLength = mat.length
  mat = mat.flat();
  for(let i = 0; i < mat.length; i++) {
      let num = mat[i];
      frequencyTable[num] = frequencyTable[num]+1 || 1
        if(frequencyTable[num] === matLength) {
              return num;
          }
  }
  
  return -1

};