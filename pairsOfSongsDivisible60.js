/**
 * @param {number[]} time
 * @return {number}
 */
// Solution that works in O(n)
// Check solution for maths: 
// https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solution/
const numPairsDivisibleBy60 = (time) => {
  const appearDic = {};
  let ans = 0;
  time.forEach(song => {
      const mod = song % 60;
      const left = (60 - mod) % 60;
      ans += appearDic[left] ? appearDic[left] : 0;
      appearDic[mod] = appearDic[mod] ? appearDic[mod] + 1 : 1;
  });
  return ans;
};

// Smarter solution - but fails a few test cases such as [20, 40] (returns too many pairs)
var numPairsDivisibleBy60 = function(time) {
  let pairs = 0;
  // x + (y-x) % y === 0
  // 100 + (60 - 100)  % 60 === 0
  let hash = {};
  // Similar to Two-sum problem, compute the compliment that would make the song work later
  // remainder = 0 if song evenly divisible by 60
  time.forEach((song) => {
      let remainder = song % 60;
      hash[song] = remainder;
  });
  // check to see if theres a remainder solution in the hash already,
  // or if the song is already evenly divisible by 60
  for(let i = 0; i < time.length; i++) {
      if(hash[time[i]] === time[i] || hash[time[i]] === 0) {
          pairs++;
      }
  }
  
  return pairs;
};

// Brute force solution, works in O(n^2)
  // Initially, id want to do a double loop taking time[i],
  // and walking thru each time[j] to see if they meet the conditions
var numPairsDivisibleBy60 = function(time) {
  let pairs = 0;
  for(let i = 0; i < time.length; i++) {
      for(let j = i + 1; j < time.length; j++) {
          if((time[i] + time[j]) % 60 === 0) {
              pairs++;
          }
      }
  }
  return pairs;
}