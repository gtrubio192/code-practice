// You want to schedule a list of jobs in d days. Jobs are dependent (i.e To work on the i-th job, you have to finish all the jobs j where 0 <= j < i).
// You have to finish at least one task every day. The difficulty of a job schedule is the sum of difficulties of each day of the d days. The difficulty of a day is the maximum difficulty of a job done in that day.
// Given an array of integers jobDifficulty and an integer d. The difficulty of the i-th job is jobDifficulty[i].
// Return the minimum difficulty of a job schedule. If you cannot find a schedule for the jobs return -1.


// Explaination and code: 
// https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/discuss/944828/Short-DP-solution-with-highly-detailed-step-by-step-explanation
const minDifficulty = (A, D) => {
  let n = A.length, inf = Infinity, maxd;
  
  if (n < D) return -1;
  
  let dp = new Array(n + 1).fill(Infinity);
  dp[n] = 0;
  
  for (let d = 1; d <= D; d++) {
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

