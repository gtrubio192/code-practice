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
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */

//  Idea:
//  It is easiest to apply our flattening method (flatten()) during the class construction process, 
// so that we only ever store the flattened list (data) in our class instance. Since there can be multiple layers of nesting, 
// we should make flatten a recursive function.
// With flatten, we should iterate through the given list and if the current element (el) is an integer we 
// should push its contained value onto data, otherwise we should recursively call flatten on the nested list contained in el.
// Once our data is successfully flattened, next() should be as easy as removing and returning the lead element of data. 
// When data is reduced to a length of 0, then hasNext() can return false.
class NestedIterator {
    constructor(nestedList) {
        this.data = [];
        this.flatten(nestedList)
    }
    // recursively flatten nestedList<NestedInteger>
    flatten(list) {
        for (let el of list)
            if (el.isInteger()) this.data.push(el.getInteger())
            else this.flatten(el.getList())
    };
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.data.length
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.data.shift()
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/