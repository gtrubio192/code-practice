
// Bottom-up approach
// 
var maxDepth = function(root) {
  if(!root)   return 0;
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};


// Top-down approach
// Use approach when you can calc some values and help
// children calculate their values based off params
let answer = 0;
const maxDepth = (root, depth) => {
  if(!root)   return;
  if(!root.left && !root.right) {
      answer = Math.max(answer, depth);
  }
  maxDepth(root.left, depth + 1);
  maxDepth(root.right, depth + 1);
  
  return answer;
}