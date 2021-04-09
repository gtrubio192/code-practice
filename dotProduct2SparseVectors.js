/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.vector = nums;
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function({vector}) {
    let sums = 0;
    this.vector.forEach((num, i) => {
        sums += num*vector[i]
    })
    return sums;
};

// Your SparseVector object will be instantiated and called as such:
let v1 = new SparseVector([1,0,0,2,3]);
let v2 = new SparseVector([0,3,0,4,0]);
let ans = v1.dotProduct(v2);

console.log('Sparse Vector of v1 and v2: ', ans)