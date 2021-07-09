/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

 // Time : very slow (640ms) - O((n + m) * K) => (add n + m) => O(N*K)
var mergeKLists = function(lists) {
  if(lists.length <= 1)  return lists[0] || null;

  let mergeList;
  // Recursive time: O(n + m)
  // Recursive call made for each element in each list,  the time complexity is linear in the combined size of the lists.
  var mergeTwoLists = function(l1, l2) {
    if(!l1){
        return l2;
    }
    else if(!l2) {
        return l1;
    }
    else if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
  };
      
  mergeList = lists.pop();
  while(lists.length > 1) {
      // console.log(' list before: ', lists)
      mergeList = mergeTwoLists(mergeList, lists.pop());
      // console.log('remaining list: ', lists)
  }
  // should only have 1 item in lists after loop
  mergeList = mergeTwoLists(mergeList, lists.pop());
  return mergeList;
};