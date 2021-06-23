// https://leetcode.com/problems/leftmost-column-with-at-least-a-one/
// A row-sorted binary matrix means that all elements are 0 or 1
// and each row of the matrix is sorted in non-decreasing order.

// Given a row-sorted binary matrix binaryMatrix, return the index (0-indexed)
// of the leftmost column with a 1 in it. If such an index does not exist, return -1.

// You can't access the Binary Matrix directly. You may only access the matrix using a BinaryMatrix interface:
// ex) Input: mat = [[0,0,0,1],[0,0,1,1],[0,1,1,1]]

/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
  let [rows, cols] = binaryMatrix.dimensions();
  
  // start searching from right most col
  let currCol = cols-1;
  let currRow = 0;
  while(currCol >= 0 && currRow < rows) {
      let value = binaryMatrix.get(currRow, currCol);
      if(value === 1) {
          currCol--;
      }
      else {
          currRow++;
      }
  }
  
  return (currCol == cols - 1) ? -1 : currCol + 1;
  
};