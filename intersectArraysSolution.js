var intersect = function(nums1, nums2) {
  obj = {};
  result = [];
  for(let i of nums1){
      obj[i] = obj[i] ? obj[i]+1 : 1
  }
  for(let i of nums2){
      if(obj[i]){
          obj[i]--
          result.push(i)
      }
  }
  return result
};

//Even Better Solution with less memory usage
// Sort both arrays, if they are the same take it.
// Otherwise, take out the smaller one until either array is empty.
var intersect = function(nums1, nums2) {
  let a1 = nums1.sort((a,b)=> a-b);
  let a2 = nums2.sort((a,b)=> a-b);
  let result = [];
  while(a1.length && a2.length){
      if(a1[0] === a2[0]){
          result.push(a1.shift());
          a2.shift();
      } 
      else if(a1[0] > a2[0]){
          a2.shift();
      }else{
          a1.shift();
      }
  }
  return result
};
