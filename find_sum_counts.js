// Given a list of n integers arr[0..(n-1)], determine the number of different 
// pairs of elements within it which sum to k.
// If an integer appears in the list multiple times, each copy is considered to
// be different; that is, two pairs are considered different if one pair includes at least one array index which the other doesn't, even if they include the same values.

// "Best" solution, O(n)
const numberOfWays = (nums, k) =>  {
  let freq = new Map(), count=0; 
  for (let i = 0; i < nums.length; i++) {
    let compliment = k-nums[i];

    if (freq.get(compliment)) {
        if(freq.get(compliment)==1) freq.delete(compliment)
        else freq.set(compliment,freq.get(compliment)-1)
        count++;
    } else freq.set(nums[i],freq.get(nums[i])+1 || 1)
  } 
  return count;
}
// My solution - uses double array, O(n2)
function numberOfWays(arr, k) {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if(sum === k && i !== k) {
        count++
      }
    }
  }
  return count;
}