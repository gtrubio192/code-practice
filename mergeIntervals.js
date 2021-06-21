// Given an array of intervals where intervals[i] = [starti, endi], 
// merge all overlapping intervals, and return an array of the non-overlapping 
// intervals that cover all the intervals in the input.

// Ex)
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // sort intervals based off of start values to ensure a.start <= b.start
  // Check intervals[i] and intervals[i+1]
  if(intervals.length < 2) return intervals;
  intervals.sort((a,b) => a[0] - b[0]);
  let result = [];
  let start = intervals[0][0],
      end = intervals[0][1];
  for(let i = 1; i < intervals.length; i++) {
      let [startJ, endJ] = intervals[i];
      if(startJ <= end) {
          end = Math.max(endJ, end);
       // result.push([start, Math.max(endJ, end)])
      }
      // non overlapping, add previous interval, reset
      else {
          result.push([start, end]);
          start = startJ;
          end = endJ;
      }
  }
  result.push([start, end]);
  
  return result;
};

// Time Complexity: O(n*logn)
// We are iterating the intervals only once which will take O(N), 
// in the beginning though, since we need to sort the intervals, our 
// algorithm will take O(N * logN).