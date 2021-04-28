/**
 * BREADTH-FIRST TRAVERSE: Level order (row by row of tree)
 * With BFT of tree, we use a *queue
 * 
 * Node Definition:
 * 
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * 
 */


 // Basic BFT algorithm
const BFS = (root) => {
  let queue = [];     // array of nodes
  let values = [];    // array of node values
  queue.push(root)
  
  while(queue.length) {
      let nextNode = queue.shift();       // remove first element from queue
      values.push(nextNode.val);
      // loop essentially takes a parent node creates a queue 
      // of all the child nodes on any given level
      for(let child of nextNode.children) {
          queue.push(child);
      }
  }
}

/**
 * 
 * Given an n-ary tree, return the level order traversal of its nodes' values.

  Nary-Tree input serialization is represented in their level order traversal, 
  each group of children is separated by the null value 
  Input: root = [1,null,3,2,4,null,5,6]
  Output: [[1],[3,2,4],[5,6]]

  Idea:
  We need to create a new sub-list each time we're starting a new layer, 
  and we need to insert all nodes from the layer into that sub-list. 
  A good way we can do this is by checking the current size of the queue 
  at the start of the while loop body. Then, we can have another loop that processes 
  that number of nodes. This way, we are guaranteed to be processing one layer for
  each iteration of the while loop so can put all nodes within the same iteration into 
  the same sub-list. On the first iteration of the while loop, we only have 1 node: the root node. 
  So we'll loop around the inner loop once, removing the root node, and put all of its children 
  onto the queue. Then in the second iteration, we'll remove all the children from the queue 
  (as that's the number of times we'll loop around the inner loop) and put all the grandchildren onto the queue.
  And so forth.
  
 */

var levelOrder = function(root) {
  let queue = [];     // array of nodes
  let values = [];    // array of node values
  if(!root)   return values;
  queue.push(root)
  
  while(queue.length) {
      let level = [];       // create new list for each level
      // queue length is the length of the children added in the previous loop
      // so only process 1 level at a time
      let levelSize = queue.length;     
      // process only nodes that were added in previous parents loop
      for(let i = 0; i < levelSize; i++) {
          let node = queue.shift();     
          level.push(node.val);
          queue.push(...node.children)
      }
      values.push(level)
  }
  return values;
};