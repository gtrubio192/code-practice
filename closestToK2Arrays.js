// Given an input of 2 same sized arrays, find the pair of numbers (1 from each array)
// that adds up closest to K
// ex) [1,2,5,77, 28], [5, 75, 98, 69, 55], k = 80

// Approach 1: Brute force - check each item from both arrays to find their sums and evaluate to k O(n2)

// Approach 2: Put 1 array into a set, then loop thru second arr and see if its compliment exists in the set,
//      while keeping track of 'closest' to k. O(n)
// set1.has(k - arr2[i]) ? set1.get(k - arr2[i]) : 

// Approach 3: sort both arrays, and imagine their sums in a NxN matrix. The answer will lie in a +45 degree angle
//      on this grid. Therefore, start searching from top right, and move either left or down in search.
// Time: O(nlogn) - sorting algos
// Space: O(n)

const closestToK2Arrays = (arr1, arr2, k) => {
  let pair = null;
  let closest = Infinity;
  let diff = null;
  let currRow = 0;
  let currCol = arr1.length - 1;
  let operations = 0;

  arr1.sort((a,b) => a-b);
  arr2.sort((a,b) => a-b);

  while(currRow < arr1.length && currCol >= 0) {
    operations++
    let sum = arr1[currCol] + arr2[currRow];
    diff = Math.abs(k - sum);
    if (diff < closest) {
      console.log('closest pair: ', [arr1[currCol], arr2[currRow]], ' = ', sum);
      console.log('at indexes: ', [currRow, currCol])
      pair = [arr1[currCol], arr2[currRow]];
    }

    if (sum === k) {
      return [arr1[currCol], arr2[currRow]];
    }
    else if (sum > k) {
      currCol--;
    }
    else if (sum < k) {
      currRow++;
    }
  }
  console.log('# of operations: ', operations)
  return pair;
}

let arr1 = [-10,2,5,77, 28],
    arr2 = [5, 75, 98, 69, 55];

console.log(closestToK2Arrays(arr1, arr2, 45));