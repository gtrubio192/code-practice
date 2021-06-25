// Time: O(n) - each node is visited once
// Space: worst - O(n), average - O(logn)
// left, root, right
const inOrder = (root) => {
  if(!root) return [];
  return [...inOrder(root.left), root.val, ...inOrder(root.right)];
}

// Iterative approach
// Time: O(n), Space: O(n)
const inOrderIter = root => {
  let stack = [];
  let output = [];

  if(!root) return output;

  let curr = root;
  while(curr || stack.length) {
    while(curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    output.push(curr.val);
    curr = curr.right;
  }

  return output;

}