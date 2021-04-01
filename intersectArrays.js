/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  // create hash table for each array and tally number frequency
  // use smaller of hashs in for in loop
  //      check if num exists and if so pop in min frequency
  let hash1 = createHash(nums1)
  let hash2 = createHash(nums2)
  let hash1Len = Object.entries(hash1).length;
  let hash2Len = Object.entries(hash2).length;
  let outerHash = hash1Len < hash2Len ? hash1 : hash2;
  let innerHash = hash1Len < hash2Len ? hash2 : hash1;
  let result = [];
  
  for(let [num, freq] of Object.entries(outerHash)) {
      if(innerHash.hasOwnProperty(num)) {
          let tempArr = new Array(Math.min(freq, innerHash[num]))
          tempArr = tempArr.fill(num, 0)
          result.push(...tempArr)
      }
  }
  return result;
};

var createHash = (array) => {
  let hash = {};
  for(let i = 0; i < array.length; i++) {
      hash[array[i]] = hash[array[i]] + 1 || 1;
  }
  return hash;
}