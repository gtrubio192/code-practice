// You are given a rectangular cake of size h x w and two arrays of integers horizontalCuts and verticalCuts where:

// horizontalCuts[i] is the distance from the top of the rectangular cake to the ith horizontal cut and similarly, and
// verticalCuts[j] is the distance from the left of the rectangular cake to the jth vertical cut.
// Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. 
// Since the answer can be a large number, return this modulo 10^9 + 7.

// BigInt: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
n = horizontalCuts.length
m = verticalCuts.length
// Time: O( n*logn + m*logm)
// space: O(1)
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  // sort cuts arrays. Want to find max difference btwn adjacent cuts, or btwn a cut and the boundary (h or w val)
  // ex 1 
  // Horizontal: max diff = 2 (4-2), also: 1(1-0), 1(2-1), 1(5-4)
  // vert: max diff = 2 (3 - 1), also: 1(1-0), 1(4-3)
  // Giving us a 2x2 max area
  
  horizontalCuts.sort((a,b) => a - b);
  verticalCuts.sort((a,b) => a - b);
  
  // loop thru horizontalCuts to find max diff
  let maxHorDiff = Math.max(h - horizontalCuts[horizontalCuts.length - 1], horizontalCuts[0]);
  for(let i = 1; i < horizontalCuts.length; i++) {
      maxHorDiff = Math.max(horizontalCuts[i] - horizontalCuts[i - 1], maxHorDiff);
  }
   
  // loop thru vertCuts
  let maxVertDiff = Math.max(w - verticalCuts[verticalCuts.length - 1], verticalCuts[0]);
  for(let i = 1; i < verticalCuts.length; i++) {
      maxVertDiff = Math.max(verticalCuts[i] - verticalCuts[i - 1], maxVertDiff);
  }
  
  return (BigInt(maxHorDiff)*BigInt(maxVertDiff))%(1000000007n)
};