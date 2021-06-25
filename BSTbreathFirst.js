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
// Input: [3,9,20,null,null,15,7]

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


// Recursive Approach

let levels = [];
const helper = (node, level) => {
  // initialize new arr at new level
  // levels.length will equal whatever level the first time a new level is called
  // ex) after root is added to levels, levels.length == 1. Next time recur happens
  //    from line 70, level is incremented and will equal levels.length
  if(levels.length === level) {
    levels[level] = [];
  }
  levels[level].push(node.val);
  if(node.left) helper(node.left, level + 1);
  if(node.right)  helper(node.right, level + 1);
}

const levelOrderRecur = root => {
  if(!root) return levels;
  helper(root, 0);
  return levels;
}