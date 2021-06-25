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
 * @return {number[]}
 */

// root, left, right
// first attempt
var preorderTraversal = function(root) {
    // if(root) {
    //     return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
    // }
    // else {
    //     return [];
    // }

    if(!root) return [];
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
};

// variation with declaring external array
let list = [];
var preorderTraversal = function(root) {
    if(!root) return list;

    list.push(root.val);
    preorderTraversal(root.left);
    preorderTraversal(root.right);
    return list;
};

// Iterative approach
// Let's start from the root and then at each iteration pop the current node out of the stack 
// and push its child nodes. In the implemented strategy we push nodes into output list 
// following the order Top->Bottom and Left->Right, that naturally reproduces preorder traversal.

const preOrderIter = (root) => {
  let stack = [];
  let output = [];

  if(!root) return output;

  stack.push(root);
  while(stack.length) {
    let node = stack.pop();
    output.push(node.val);
    if(node.right) {
      stack.push(node.right)
    }
    if(node.left) {
      stack.push(node.left)
    }
  }
  return output;
}