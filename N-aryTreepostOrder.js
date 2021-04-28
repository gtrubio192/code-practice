/**
 * DEPTH-FIRST SEARCH: 
 * root, children
 * 
 * 
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root, ans=[]) {
  if(!root)   return ans;
  for(let child of root.children) {
      postorder(child, ans)
  }
  ans.push(root.val);
  return ans;
};