// My code:
var fib = function(n) {
  if(n <= 1)  return n
  return fib(n-1) + fib(n-2)
};

// Dynamic programming solution
var fib = function(n) {
    // start fib sequence with first 2 numbers
    let dp = [0, 1]
    
    // compute all solutions of fib sequence up to n
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    // return nth fib sequence
    return dp[n]
}

// Fancy math formula solution - See Binet's formula for nth fib number
var fib = function(n) {
  let sqrt5 = Math.sqrt(5)
  return (Math.pow(1 + sqrt5, n) - Math.pow(1 - sqrt5, n)) / Math.pow(2, n) / sqrt5
};


// Memoized/hash recursive version
let memo = {}

var fib = function(n) {
  if (memo[n]) return memo[n]
  if (n < 2) return n 
  return memo[n] = fib(n - 2) + fib(n - 1)
};