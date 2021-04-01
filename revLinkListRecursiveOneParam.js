/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 /**
  * 
  * Key is to work backwards, and assume rest of list is already reversed.
  * Lets assume the list: n1 -> .. -> nk-1 -> nk -> ... -> nm
  * 
  * Now, assume from node nk+1 to nm have been reversed:
  * n1 -> nk-1 -> nk -> nK+1 <- nm
  * 
  * We want nk+1 next node to point to nk
  * So,
  *   nk.next.next = nk
  */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null || head.next === null) return head;
    let p = reverseList(head.next);
    console.log(p)
    head.next.next = head;
    // Be very careful that n1's next must point to Ø. 
    // If you forget about this, your linked list has a cycle in it. 
    head.next = null;
    return p;
};