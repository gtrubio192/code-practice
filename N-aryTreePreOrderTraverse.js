/**
 * 
Idea:
Preorder traversal is a type of depth-first search (DFS) approach, 
and DFS problems are generally best solved with a recursive function. 
In this case, we can even make the main function its own recursive function, rather than having to define a separate recursive helper.
In order to accomplish this, we'll need to create a new default argument for the function to hold our answer array (ans), 
which should default to an empty array.

In a preorder *DFS traversal*, a node is processed before moving on to its children,
and then the children are processed from left to right. Our recursive function should then process 
the current node (root) by pushing its value to ans, and then we should iterate through root.children and call our recursive function on each.

For all but the main function call, the return value will be unused, but ans should 
be finished by the time the main function returns it.

 */
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

var preorder = function(root, ans=[]) {
    if (!root) return ans
    ans.push(root.val)
    for (let child of root.children)
        preorder(child, ans)
    return ans
};


/**
 * Preorder traverse using a stack and nodes array
 */

var preorder = function(root) {
    let stack = [root],
        nodes = []
    
    if (!root) return nodes
    
    while (stack.length) {
      let node = stack.pop();
      nodes.push(node.val);
      console.log('nodes[] ', nodes)
      // push children to stack *in reverse
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i])
      }
      console.log('stack ', stack)
    }
    
    return nodes 
  };
  

  // My original implementation
  
  var preorder = function(root) {
      let order = []
      if(!root) return order;
      traversePreOrder(root, order)
      return order;
  };
  
  var traversePreOrder = function(root, order) {
      if(!root)   return;
      
      order.push(root.val);
      console.log('root ', root.val)
      console.log('children ', root.children)
      for(let child of root.children) {
          console.log('child ', child)
          traversePreOrder(child, order)
      }
  }