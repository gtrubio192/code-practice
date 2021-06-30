// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

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
var addTwoNumbers = function(l1, l2) {
  // recursively reverse l1 and l2 to get there values in reverse
   // add up values, and return reversed answer 
   l1 = reverseList(l1);
   l2 = reverseList(l2);
   // helper func to convert into real nums

   let lNum1 = parseInt(listToNum(l1), 10);
   let lNum2 = parseInt(listToNum(l2), 10);
   
   let answer = lNum1 + lNum2;
   
   answer = answer.toString().split('');
   let head = new ListNode(answer.pop());
   let curr = head;
   while(answer.length) {
       let node = new ListNode(answer.pop());
       curr.next = node;
       curr = node;
   }

   console.log('new LL ', head)
   //answer = reverseList(answer);
   
   return head;
};

const listToNum = (head) => {
   let num = '';
   while(head) {
       num += head.val;
       head = head.next;
   }
   return num;
}
   
const reverseList = (head) => {
   if(head === null || head.next === null) return head;
   let p = reverseList(head.next);
   head.next.next = head;
   // Be very careful that n1's next must point to Ø. 
   // If you forget about this, your linked list has a cycle in it. 
   head.next = null;
   return p;
}