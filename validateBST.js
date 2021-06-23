// https://leetcode.com/problems/validate-binary-search-tree/solution/

// Approach 1: Top-down DFS
// Time: O(n), Space: O(n) {only in worst case when tree looks like linked list }
var isValidBST = function(root) {
  return valid(root, null, null);
};
/**
 * 
 * @param {*} curr 
 * @param {*} low -infit
 * @param {*} high +infit
 */
var valid = (curr, low, high) => {
  // base case, return true bc we dont care about nulls
  if(!curr) return true;
  // check if root.val is within range
  if((low !== null && root.val <= low) ||
      high !== null && root.val >= high) {
        return false;
  }
  // left - we make root.val the new high  -- right - new low is root.val
  return validate(root.left, low, root.val) && validate(root.right, root.val, high);
}




// Approach 2: In-order traversal - left, root, right
// Time: O(n), Space: O(n)

let prev;
const isValidBST = (root) => {
  prev = null;
  return inorder(root);
};

const inorder = (root) => {
  if(!root) return true;
  if(!inorder(root.left)) return false;
  if(prev !== null && root.val <= prev) return false;

  prev = root.val;
  return inorder(root.right);
}