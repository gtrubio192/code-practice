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
 * @return {TreeNode}
 */

// Use inorder traversal to create a sorted array
// Construct a balance tree using the sorted array

var balanceBST = function(root) {
  function inOrder(myRoot) {
      if(!myRoot) return [];
      return [...inOrder(myRoot.left), myRoot.val, ...inOrder(myRoot.right)]
  }
  const sortedArr = inOrder(root)
  
  function constructTree(arr) {
      if(!arr.length) return null;
      
      const mid = Math.floor(arr.length / 2);
      const node = new TreeNode(arr[mid])
      node.left = constructTree(arr.slice(0, mid));
      node.right = constructTree(arr.slice(mid+1));
      
      return node;
  }
  return constructTree(sortedArr);
};