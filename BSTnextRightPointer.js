/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
// You are given a perfect binary tree where all leaves are on the same level, 
// and every parent has two children. The binary tree has the following definition:
// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }

// Populate each next pointer to point to its next right node.
// If there is no next right node, the next pointer should be set to NULL.
// Initially, all next pointers are set to NULL
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if(!root)   return root;
  if(!root.left && !root.right) return root;
  root.left.next = root.right;
  if(root.next) {
      root.right.next = root.next.left;
  }
  
  connect(root.left);
  connect(root.right);
  return root;
};