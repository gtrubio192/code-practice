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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(curr, low, high) {
    // in order traversal - left root right
    if(curr && curr.val >= low && curr.val <= high) {
        return curr.val + rangeSumBST(curr.right, low, high) + rangeSumBST(curr.left, low, high)
    }
    else if(curr) {
        return rangeSumBST(curr.right, low, high) + rangeSumBST(curr.left, low, high);
    }
    else {
        return 0;
    }
}