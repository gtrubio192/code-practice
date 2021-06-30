/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

var hasPathSum = function(root, targetSum) {
  if(!root) return false;
  return hasPathHelper(root, targetSum);
};

const hasPathHelper = (node, target) => {
  // base case
  if(!node)   return false;
  target -= node.val;
  // find leaf
  if(node.left === null && node.right === null ) {
      return target === 0;
  }

  return hasPathHelper(node.left, target) || hasPathHelper(node.right, target);
  
}

// addition variation (original)
var hasPathSum = function(root, targetSum) {
  if(!root) return false;
  return hasPathHelper(root, 0, targetSum);
};

const hasPathHelper = (node, total, target) => {
  // base case
  if(!node)   return false;
  total += node.val;
  console.log('current total ', total)
  // find leaf
  console.log('Total === target ', total === target);
  if(node.left === null && node.right === null) {
      // console.log('should return ...', total === target)
      return total === target;
  }

  return hasPathHelper(node.left, total, target) || hasPathHelper(node.right, total, target);
  
}