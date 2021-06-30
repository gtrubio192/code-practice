/**
 * 
 * The task is to write a function, that, given a binary tree, 
 * returns true if it is symmetric. 
The logical angle is "what does it mean for a tree to be symmetric?"
think about how to define symmetry using a simple recurrence relationship.

Tree Symmetry:
a tree is symmetric if its left and right subtrees are symmetric. 
There's two definitions that most successful solutions end up with for what it means for two trees to be symmetric:

The purely recursive definition: two binary trees t1 and t2 are symmetric if and only if t1.left and t2.right are symmetric, 
and t1.right and t2.left are symmetric.
The two-step definition: two binary trees t1 and t2 are symmetric if the reverse of t2 is equal to t1.
 */

 // Purely recursive - Time and space O(n)
function isSymmetric(root) {
  // Check root.left, root.right, return true if symmetric
  return isSymmetricHelper(root.left, root.right);
}

function isSymmetricHelper(t1, t2) {
  if (t1 == null && t2 == null) {
    return true;
  }
  if (t1 == null || t2 == null) {
    return false;
  }
  return (t1.val === t2.val) && isSymmetricHelper(t1.left, t2.right) &&
    isSymmetricHelper(t1.right, t2.left);
}



//*******************************/
// 2-step solution

function isSymmetric(root) {
  return isEqual(reverse(root.left), root.right);
}

function reverse(t) {
  if (t == null) {
    return;
  }
  var tmp = t.left;
  t.left = reverse(t.right);
  t.right = reverse(tmp);
  return t;
}

function isEqual(t1, t2) {
  if (t1 == null && t2 == null) {
    return true;
  }
  if (t1 == null || t2 == null) {
    return false;
  }
  return isEqual(t1.left, t2.left) && isEqual(t1.right, t2.right);
}