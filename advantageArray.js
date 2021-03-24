/**
 * 
  Given two arrays A and B of equal size, the advantage of A with respect to B is the number of indices i for which A[i] > B[i].
  Return any permutation of A that maximizes its advantage with respect to B.

  Ex)
  Input: A = [2,7,11,15], B = [1,10,4,11]
  Output: [2,11,7,15]
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */

//.  0 1 2 3 4
//  [2,7,11,15]
//  [1,10,4,11]
// i = 0,   1,      2,
// j = 0+1, 1+1,    2+1

// [2,11,11,15]
var advantageCount = function(A, B) {
  // loop thru A,
  // at each index, check if A[i] > B[i]
  
  for(let i=0; i < A.length; i++) {
      // if A[i] < B[i], find first elem in A that is bigger than B[i]
      let found = true
      if(A[i] < B[i]) {
          found = false
          for(let j = i+1; j < A.length && !found; j++) {
              // find bigger elem and swap
              if(A[j] > B[i]) {
                  found = true;
                  let temp = A[i];
                  A[i] = A[j];
                  A[j] = temp;
                  console.log(A)
                  console.log(B)
                  console.log(found)
                  console.log('j: ', j, 'i: ', i)
              }
          }
      }
  }
  return A;
};