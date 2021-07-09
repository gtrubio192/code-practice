/**
 * @param {number[]} height
 * @return {number}
 */

// find longest decreasing immed followed by longest increasing sequence
var trap = function(height) {
  // 2 pointers - left and right
  // find maxLeft and maxRight of highest heights
  // check which side is higher, take sum of smaller height
  // if maxLef < maxRight
  //      ans += maxLeft - height[l++]
  // else
  //      ans += maxRight - height[r--]
  
  let left = 0,
      right = height.length - 1,
      leftMax = 0,
      rightMax = 0,
      ans = 0;
  
  while (left < right) {
      leftMax = Math.max(leftMax, height[left]);
      rightMax = Math.max(rightMax, height[right]);
      // update answer based off lowest point & move pointer
      if(leftMax < rightMax) {
        // take verical slice at left
        ans += leftMax - height[left++];
      }
      else {
        // take verical slice at right
        ans += rightMax - height[right--];
      }
  }
  return ans;
};


// Dynamic Programming
var trap = function(height) {
  if (height.length < 3) return 0;
  const maxHeightLeft = height.slice();
  const maxHeightRight = height.slice();
  // Go from left to right, capturing the highest point up to that index
  for (let i = 1; i < height.length; i++) {
    if (maxHeightLeft[i] < maxHeightLeft[i - 1])
      maxHeightLeft[i] = maxHeightLeft[i - 1];
  }
  for (let i = height.length - 2; i >= 0; i--) {
    if (maxHeightRight[i] < maxHeightRight[i + 1])
      maxHeightRight[i] = maxHeightRight[i + 1];
  }
  return height.reduce(
    (acc, cur, idx) =>
      acc + Math.min(maxHeightLeft[idx], maxHeightRight[idx]) - cur,
    0
  );
};