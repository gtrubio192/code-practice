/**
 * @param {number[]} sticks
 * @return {number}
 */

/**
 * @param {number[]} sticks
 * @return {number}
 */

// Final solution, works!
// Time: O(nlogn) - sort and loop
var connectSticks = function(sticks) {
  if(sticks.length === 2) return sticks[0] + sticks[1];
  if(sticks.length === 1) return 0;
  
  sticks.sort((a,b) => a - b);
  let cost = 0;
  let nextSmallest = [];
  
  const getMin = () => {
      if(nextSmallest.length && sticks.length) {
          return nextSmallest[0] < sticks[0] ? nextSmallest.shift() : sticks.shift();
      }
      // pick from remaining totals
      // if above statement fails, one of the 2 arrays has to have a value left
      else if(nextSmallest.length) {
          return nextSmallest.shift();
      }
      else {
          return sticks.shift();
      }
  }
  
  // loop should terminate when there's 1 element left
  while(sticks.length > 1 || nextSmallest.length > 1) {
      let sum1, sum2, total;
      sum1 = getMin();
      sum2 = getMin();
      total = sum1 + sum2;
      cost += total;
      // if new total is bigger than our smallest element in sticks,
      // push it to nextSmallest array for later comparison.
      // Note: nextSmallest[] always in sorted order with this insertion scheme
      if(sticks.length && total > sticks[0]) {
          nextSmallest.push(total);
      }
      else {
          sticks.unshift(total);
      }
  }
  
  if(nextSmallest.length && sticks.length) {
      cost += nextSmallest.shift() + sticks.shift();
  }
  else if(nextSmallest.length) {
      cost += nextSmallest.shift();
  }
  else {
      cost += sticks.shift();
  }
  
  return cost;
};


// Java Solution - good to know since min heap is built into language
class Solution {
  public int connectSticks(int[] sticks) {
      int totalCost = 0;

      PriorityQueue<Integer> pq = new PriorityQueue<>();

      // add all sticks to the min heap.
      for (int stick : sticks) {
          pq.add(stick);
      }

      // combine two of the smallest sticks until we are left with just one.
      while (pq.size() > 1) {
          int stick1 = pq.remove();
          int stick2 = pq.remove();
          
          int cost = stick1 + stick2;
          totalCost += cost;
          
          pq.add(stick1 + stick2);
      }

      return totalCost;
  }
}
// Java Solution


// Original solution, wrong answer
var connectSticks = function(sticks) {
  if(sticks.length < 2)   return 0;
  sticks.sort((a,b) => a - b);
  
  // while sticks.length > 1
  // take first 2 ticks to add, put sum at start of sticks,
  // and also put sum into costs array
  // after loop, should only be 1 item in sticks
  // add that to costs array and return
  let total = 0;
  let cost = 0;
  let maxCost = [];
  let sum1 = sticks.shift();
  let sum2 = sticks.shift();
  maxCost.push(sum1 + sum2);
  cost += maxCost[0];
  
  const getMin = () => {
      return sticks[0] > maxCost[0] ? maxCost.shift() : sticks.shift();
  }
  
  while(sticks.length > 1) {
      // sum1 = sticks.shift();  
      // sum2 = sticks.shift();
      sum1 = getMin();
      sum2 = getMin();
      total = sum1 + sum2;
      
      if(sticks[0] <= total) {
          sticks.unshift(total);
          sticks.sort((a,b) => a - b);
      }
      else {
          sticks.unshift(total);
      }
      cost += total;
  }
  // console.log('cost ', cost)
  return cost
};