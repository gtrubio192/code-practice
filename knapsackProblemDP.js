// You have n items, each item has a weight (kg) and a $ value
// You also have a bag that can only hold X kg Capacity, maximize the $value amount
// of items to put in bag

// DP 101 
// 1. Start w/recursive solution (brute force)
// 2. Store (memo) - notice repeated operations and store
// 3. Bottom up - optional solution

// 1.Recursive solution - O(2^n)
const w = [1, 3, 4,2, 5]    // weights
const v = [33, 22, 53, 3, 69]   // values
const knapsackRec = (n, C) => {
  if (n === 0  || C === 0) {
    result = 0;
  }
  // check if weight is too heavy, skip if so
  else if (w[n] > C) {
    result = knapsackRec(n - 1, C)
  }
  else {
    let temp1 = knapsackRec(n-1, C)   // test by Not putting in bag
    let temp2 = v[n] + knapsackRec(n-1, C - w[n])   // test if we put in bag
    result = Math.max(temp1, temp2);    // determine whic is more profitable
  }
  return result
}

// 2. Memoize repeated computations - O(nC)
let arr = undefined;    // create double array n x C
const knapsackMemo = (n, C) => {
  if (arr[n][C])  return arr[n][C];   // if it exists, return it
  if (n === 0  || C === 0) {
    result = 0;
  }
  else if (w[n] > C) {
    result = knapsackRec(n - 1, C)
  }
  else {
    let temp1 = knapsackRec(n-1, C)   // test by Not putting in bag
    let temp2 = v[n] + knapsackRec(n-1, C - w[n])   // test if we put in bag
    result = Math.max(temp1, temp2);    // determine whic is more profitable
  }
  arr[n][C] = result;
  return result;
}