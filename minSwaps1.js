/**
 * Given a binary array data, return the minimum number of swaps required to group all 1’s 
 * present in the array together in any place in the array.
  ex) data = [1,0,1,0,1,0,0,1,1,0,1], output: 3 swaps
  
 * Idea: Get the window size aka total number of 1's in array. Within this window, look at array
 * and find the max amount of 1's within any given window.
 * Difference btwn window size and max 1's is the min number of 0's to swap
 * 
 * Time: O(n) , Space: O(1)
 */

const minSwaps1 = (data) => {
  // count total number of 1's, this is our window size
  let windowSize = data.reduce((acc, val) => acc + val, 0);
  let currOnesInWindow = 0, maxOnesInWindow = 0;

  // loop thru array, using window size and add up 1's within that window
  for(let i = 0; i < data.length; i++) {
    currOnesInWindow += data[i];
    // if pointer gets bigger than our window size,
    // move pointer. Subtract the value that the left pointer is looking at
    if(i >= windowSize) {
      currOnesInWindow -= data[i - windowSize];
    }
    maxOnesInWindow = Math.max(maxOnesInWindow, currOnesInWindow);
  }
  // the minimum swaps is the total number of 1's minus the max number of 1's in a given window
  // the difference is essentially a 0, which is what we need to swap
  return windowSize - maxOnesInWindow
}