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
 * @return {number[][]}
 */

 // Iterative approach using queue
 // Time O(n), Space O(n)

// Idea:
//  While queue is not empty :
// Start the current level by adding an empty list into output structure levels.
// Compute how many elements should be on the current level : it's a queue length.
// Pop out all these elements from the queue and add them into the current level.
// Push their child nodes into the queue for the next level.
// Go to the next level level++

var levelOrder = function(root) {
  let queue = [];
  let levels = [];
  
  if(!root)   return levels;
  
  queue.push(root);
  let level = 0;
  
  while(queue.length) {
      // start the current level
      levels[level] = [];
      
      let levelLen = queue.length;
      
      // make loop to print out all node.val
      for(let i = 0; i < levelLen; i++) {
          let node = queue.shift();
          // fulfill the current level
          levels[level].push(node.val);
          
          // add child nodes of the current level
          // in the queue for the next level
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
      level++;
  }
  return levels;
};