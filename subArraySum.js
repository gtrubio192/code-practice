// Given an array of integers nums and an integer k, return the total number of 
// continuous subarrays whose sum equals to k
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Solution using hashmap - O(n)
// https://leetcode.com/problems/subarray-sum-equals-k/discuss/408341/Javascript-Brute-Force-and-HashMap-Solution-w-Explanation
// Something to understand first is, when Sum_i = #0 + #1 + #2 .... + #i = 6, and 
// Sum_k #0 + #1 + #2 ... + #k = 10, its pretty obvious that between #i to #k is equal to 4, and we can write that mathmatically to Sum_k - Sum_i = Sumi_to_k
// So In order to find k we are basically trying to find a pair of Sum_i and Sum_k such that Sum_k - Sum_i = k. 
// Since we are only iterating the array once and calculating the sum from left to right accumatively, we can keep a record of all the sums up to index i, 
// that is Sum0, Sum1...Sumi. For each new sum, we can check if there is a previous Sum such that Sum_current - Sum_prev = k. In order to find what is the "old_index",
// we can just change the formula to Sum_curren - k = Sum_old and look up from our record to see if we find a matching pair. If we did, bingo, that means we found a valid subarray.
var subarraySumHashMap = function(nums, k) {
    let map = new Map();
    let sum = 0;
    let count = 0;
    //Theres a case where sum^i is zero, and there should always be a case for that
    // magine the situation
    // 3 4 target = 7
    // since 7 - (3+4) = 0 and we are looking for if
    map.set(0,1);
    for (let i=0;i<nums.length;i++) {
        sum += nums[i];
        if (map.has(sum-k)) count += map.get(sum-k);
        map.set(sum, (map.get(sum) || 0) + 1);      // this 1 liner does 2 lines below in 1 shot 
        // if (map.has(sum)) map.set(sum, map.get(sum)+1);
        // else map.set(sum, 1);
    }
    return count;
}

// My submission
var subarraySum = function(nums, k) {
    
    // 2 pointers to trace along array. initialize p2 = p1
    //  We can choose a particular start point and while iterating over the end points, 
    // we can add the element corresponding to the end point to the sum formed till now. 
    // Whenever the sumsum equals the required k value, we can update the count value. 
    // We do so while iterating over all the end indices possible for every start index.
    // Whenever, we update the start index, we need to reset the sum value to 0.
    let sums = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        sums = 0;
        for(let j = i; j < nums.length; j++) {
            sums += nums[j]
            if(sums === k) {
                count++;
            }
        }
    }
    return count;
};