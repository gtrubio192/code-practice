// https://leetcode.com/problems/product-of-array-except-self/solution/
// Idea here is to multiply output[i] from left, then right
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = Array(nums.length);
    let productFromLeft = 1, productFromRight = 1;
    let i = 0;
    for (i = 0; i < nums.length; i++) {
        output[i] = productFromLeft;
        productFromLeft *= nums[i];
    }
    for (i = i -1; i >= 0; i--) {
        output[i] *= productFromRight; 
        productFromRight *= nums[i];
    }
    console.log('productFromRight  ', productFromRight, 'productFromLeft  ', productFromLeft)
    return output;
	// Time Complexity: O(N)
    // Space Complexity: O(1)
};

// EXPERIMENT MERGING 2 FOR LOOPS
var productExceptSelfMergedLoops = function(nums) {
    let output = Array(nums.length);
    let productFromLeft = 1, productFromRight = 1;
    let i = 0;
    let left = true;
    while((i < nums.length || i >= 0) && i > -1) {
        if(i === nums.length) {
            left = false;
            i--;
            console.log('output after right pass  ', output)
        }
        if(!left && i >=0) {
            output[i] *= productFromRight; 
            productFromRight *= nums[i];
            i--;
            console.log('output after left pass  ', output)
        }
        if(left) {
            output[i] = productFromLeft;
            productFromLeft *= nums[i];
            i++;
        }
    }
    console.log('EXPERIMENTAL OUTPUT: ', output)
    return output;
	// Time Complexity: O(N)
    // Space Complexity: O(1)
};
// *********************************
// My solution, exceeds runtime
// Basically O(n2), O(n*(n-1)) -> O(n2-n)
// var productExceptSelf = function(nums) {
//     let answer = [];
//     for(let i = 0; i < nums.length; i++) {
//         let notI = [...nums.slice(0,i), ...nums.slice(i+1,nums.length)];
//         let product = 1
//         for(let j = 0; j < notI.length; j++) {
//             product *= notI[j]
//         }
//         answer.push(product)
//     }
//     return answer;
// };

console.log(productExceptSelf([1,3,4,6,7,8]));

console.log(productExceptSelfMergedLoops([1,3,4,6,7,8]));