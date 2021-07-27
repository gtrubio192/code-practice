// You want to schedule a list of jobs in d days. Jobs are dependent (i.e To work on the i-th job, you have to finish all the jobs j where 0 <= j < i).
// You have to finish at least one task every day. The difficulty of a job schedule is the sum of difficulties of each day of the d days. The difficulty of a day is the maximum difficulty of a job done in that day.
// Given an array of integers jobDifficulty and an integer d. The difficulty of the i-th job is jobDifficulty[i].
// Return the minimum difficulty of a job schedule. If you cannot find a schedule for the jobs return -1.

/*
  Rephrasing:
    Given an array, cut it into d contiguous subarrays and return
    the min sum of the max of each subarray
*/

// Explaination and code: 
// https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/discuss/944828/Short-DP-solution-with-highly-detailed-step-by-step-explanation
const minDifficulty = (A, D) => {
  let n = A.length, inf = Infinity, maxd;
  
  if (n < D) return -1;
  // use
  let dp = new Array(n + 1).fill(Infinity);
  dp[n] = 0;
  
  // outer loop: cycling thru num of days
  for (let d = 1; d <= D; d++) {
      // 2nd loop: cycling number of cuts according to how many days remain
      // the less days, the less amount of cuts
      for (let i = 0; i <= n - d; i++) {
          maxd = 0, dp[i] = inf;

          for (let j = i; j <= n - d; j++) {
              maxd =  Math.max(maxd, A[j]);
              dp[i] = Math.min(dp[i], maxd + dp[j + 1]);
          }
      }
  }
  
  return dp[0];
}


// Solution from: https://www.youtube.com/watch?v=pmQAtRZ3CuE
// Make use of DFS to do the job
// O(N*N*d) time, O(N*d) space
const minDifficulty = (jobDifficulty, d) => {
  if(d > jobDifficulty.length)  return -1;
  // Use d + 1 because d(days) starts as a real world 1
  let dp = [...Array(d + 1)].map(x=>Array(jobDifficulty.length).fill(-1));
  // DFS - tries every single combination of cuts. Start at index 0
  return dfs(jobDifficulty, d , dp, 0);
}

const dfs = (jobDifficulty, d, dp, idx) => {
  const len = jobDifficulty.length;
  // base case: if d = 1, return max of whats left in subarray bc dont want to make to many subarrs
  if(d === 1) {
    let max = 0;
    while(idx < len) {
      // finds max val of remaining subarrs
      max = Math.max(max, jobDifficulty[idx++]);
    }
    return max;
  }
  // now check if this value has been changed in the past, if so return its value
  if(dp[d][idx] !== -1)   return dp[d][idx];

  // Now check every combination of subarrays at every possible cut
  // len - d + 1 ==> to ensure theres enough room at end of array to make all cuts
  let max = 0;
  let res = Number.MAX_SAFE_INTEGER;
  for(let i = idx; i < len - d + 1; i++) {
    max = Math.max(max, jobDifficulty[i]);
    res = Math.min(res, max + dfs(jobDifficulty, d - 1, dp, i + 1))
  }
  return dp[d][idx] = res;
}

// **************************************************


// Orignal Solution using min heaps, wrong for some test cases

var minDifficulty = function(jobDifficulty, d) {
  if(jobDifficulty.length < d)    return -1;
  // Have to find d amount of numbers that add up to smallest possible value
  // each day(d) should be a min heap
  // If the max for any day has a duplicate, need to move dup to new day/heap
  // Start with 1 min heap(day), and for every day, populate next one with lowest value of day 1. 
  let day1 = new MinHeap();
  let days = [];
  
  // populating min heap
  jobDifficulty.forEach(job => {
      // console.log('inserting job ', job)
      day1.insert(job)
  });
  days.push(day1)
  // 
  for(let day = 1; day < d; day++) {
      days.push(day1.extract());
  }
  // console.log('days ', days)
  let minDifficulty = day1.heap[day1.size - 1];
  for(let i = 1; i < d; i++) {
      minDifficulty += days[i];
  }
  
  return minDifficulty;
};

/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */

class MinHeap {
  constructor() {
      this.compareFunc = (a,b) => a - b;
      this.heap = [];
  }
  
  insert(val) {
      this.heap.unshift(val);
      this.heap.sort(this.compareFunc);
  }
  
  extract() {
      if (this.size === 0) return null;
      return this.heap.shift();
  }
  
  peek() {
      if(this.size === 0) return null;
      return this.heap[0];
  }
  
  get size() {
      return this.heap.length;
  }
}

