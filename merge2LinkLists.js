/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Recursive solution
// list1[0] + merge(list1[1:],list2); list1[0]<list2[0]
// otherwise
// list2[0] + merge(list1,list2[1:]) 
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


// Original submission, Results still a bit off, need to refine
var mergeTwoLists = function(l1, l2) {
  let curr = l1;
  while(l2) {
      // move on, l2.val is bigger
      let temps1 = l1;
      if(curr.val < l2.val && curr.next && curr.next < l2.val) {
          curr = curr.next;
      }
      // insert before
      else if(l2.val <= curr.val) {
          let t2head = new ListNode(l2.val);
          let t1head = l1;
          let temp2 = l2.next;
          t2head.next = curr;
          l1 = t2head;
          l2 = temp2;
      }
      // end of l1, attach rest of l2
      else if(!curr.next && (l2 || l2.next)) {
          curr.next = l2;
          //l1 = curr;
      }
      // insert in between
      else {
          let temp1 = curr.next,
              temp2 = l2.next;
          curr.next = l2;
          l2.next = temp1;
          l2 = temp2;
          //l1 = l1.next;   // move forward
      }
  }
  return l1;
};
