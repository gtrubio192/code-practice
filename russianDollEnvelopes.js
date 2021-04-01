/**
 * 
 * The naive approach here would be to try every single permutation of our envelope array (E), but that would be a time complexity of O(N!) which is frankly an incomprehensible number when N goes up to 5000.

  As the naive approach would involve repeating many of the same individual comparisons over and over again, we can quickly see that a dynamic programming (DP) solution would be beneficial.

  In order for a DP solution to be effective, however, we'd need to find a way to progress from the easiest subsolution and build from there for each successively more complex subsolution. The best way to do this would be to sort E first by width (E[i][0]), and then by height (E[i][1]).

  Then we could start with the smallest envelope and work our way up, storing in our DP array (dp) the result of how many smaller envelopes it is possible to fit in the corresponding envelope. That way we could simplify each iteration to checking to see which of the entries in dp corresponding to smaller envelopes is the largest. This would drop the time complexity to O(N^2), which is a definite improvement.

  But it should also be apparent that if we were to define a subsequence of E that was the ideal nesting order of envelopes for the solution, then that array would be strictly increasing in both width and height.

  If we've already sorted E primarily by width, we should then be able to consider a corresponding array of just the heights and realize that the solution would be defined as the longest increasing subsequence of that.

  The only difficulty would be for consecutive envelopes with the same sorted width. To avoid that, we can simply make sure that our sort function sorts height in descending order so that the first envelope encountered for any given width would be the largest one.

  At the end of the longest increasing subsequence algorithm, the length of dp is equal to the length of the subsequence. Due to the sort function and the binary searches required for the algorithm, the time complexity now shrinks to O(N log N).
 
  Link: https://leetcode.com/problems/russian-doll-envelopes/discuss/1134011/JS-Python-Java-C%2B%2B-or-Easy-LIS-Solution-w-Explanation
  */

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(E) {
    // Sort envelopes by increasing order for first dimension(width), 
    // and by decreasing order for second dimension(height)
    E.sort((a,b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
    let len = E.length, dp = []
    for (let i = 0; i < len; i++) {
        let height = E[i][1], left = 0, right = dp.length 
        // binary search
        while (left < right) {
            // See: 
            // https://riptutorial.com/javascript/example/32699/faster-multiplication-or-division-by-powers-of-2
            // right shift operator here is equvalent to Math.floor((left+right)/2)
            let mid = (left + right) >> 1
            if (dp[mid] < height) left = mid + 1
            else right = mid
        }
        // left is 
        dp[left] = height
    }
    return dp.length
};