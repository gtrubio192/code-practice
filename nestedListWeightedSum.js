/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

 // Problem from LeetCode:
//  You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists.

//  The depth of an integer is the number of lists that it is inside of. For example, the nested list [1,[2,2],[[3],2],1] has each integer's value set to its depth.
 
//  Return the sum of each integer in nestedList multiplied by its depth.
 
 
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList) {
    return recursiveSums(nestedList, 1)
};

// Use recursion to do a depth-first search: 80ms runtime
var recursiveSums = (list, depth) => {
    let total = 0;
    console.log('List: ', list)
    for(let i = 0; i < list.length; i++) {
        // Caching element shaves off like 20ms!?
        let element = list[i];
        if(element.isInteger()) {
            total += element.getInteger()*depth
        }
        else {
            total += recursiveSums(element.getList(), depth + 1)
        }
    }
    return total;
}


// ******************************************************************
// 76ms Solution, non recursive and using queue

var depthSum = function(nestedList) {
  let depth = 1;
  let queue = nestedList;
  let sum = 0;
  
  while (queue.length) {
      const size = queue.length;
      for(let i = 0; i < size; i++) {
          const num = queue.shift();
          if (num.isInteger()) {
              sum += num.getInteger() * depth;
          } else {
              queue.push(...num.getList());
          }
      }
      depth++;
  }
  
  return sum;
};