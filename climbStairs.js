/**
 * @param {number} n
 * @return {number}
 */
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 // Basically its Fibonacci , adjusted slightly at 'i <= n' and 'let dp = [0, 1]'
var climbStairs = function(n) {
  if (n === 0)    return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;  
  
  let dp = [1, 2];
  for (let i = 2; i < n; i++) {
      dp[2] = dp[1] + dp[0];
      dp[0] = dp[1];
      dp[1] = dp[2];
  }
  
  return dp[2]
};


// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb x steps. In how many distinct ways can you climb to the top?
const climbStairsBottomUp = (n, xSteps) => {
  if(n === 0) return 1;
  nums = new Array(n+1);
  nums[0] = 1;

  for(let i = 1; i < n; i++) {
    let total = 0;
    xSteps.forEach((stepSize) => {
      if(i - stepSize >= 0) {
        total += nums[i-stepSize];
      }
    });
    nums[i] = total;
  }
  return nums[n];
}