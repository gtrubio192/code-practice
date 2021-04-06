/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect1 = function(nums1, nums2) {
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


// *************************************************
// Similar, cleaner solution

var intersect2 = function(nums1, nums2) {
    
  const intersect = [];
  const hashMap = nums1.length > nums2.length ? createHash(nums2) : createHash(nums1)
  nums2 = nums1.length > nums2.length ? nums1 : nums2;

//check if hashMap includes elements from second array
// if yes - push it to result array
//    & decrement its count
  for(let i = 0; i < nums2.length; i++){
      if(hashMap[nums2[i]] > 0){
         intersect.push(nums2[i]);
         hashMap[nums2[i]] -= 1;
      }
  }
  return intersect;
};



console.log(intersect1([1,2,2,1], [1,2,2,3]))
console.log(intersect2([1,2,2,1], [1,2,2,3]))