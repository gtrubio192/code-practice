// FAVORITE
var findErrorNums = function(nums) {
  const set = new Set();
  let duplicate;
  let missing;

  for (let num of nums) {
    if (set.has(num)) {
      // Duplicate if the number is in the set
      duplicate = num;
    }
    // Add the number to the set
    set.add(num);
  }

  for (let i = 1; i <= nums.length; i++) {
    // Missing if the number is not in the set
    if (!set.has(i)) {
      missing = i;
      break;
    }
  }

  return [duplicate, missing];
};

/************************************************************************ */

var findErrorNums = function(nums) {
    let left;

    nums.unshift(0);
    
    for(let i=1;i<nums.length;i++){
        let idx=Math.abs(nums[i])

        if(nums[idx]<0) left=idx;
        else nums[idx]*=-1;
    }

    return [left,nums.findIndex(n => n>0)];
};

/************************************************************************ */

var findErrorNums = function(nums) {
    
  const min = 1, max = nums.length;
  let doubled, missing;
  
  let S = new Set();
  
  nums.sort((a,b) => a > b ? 1 : a < b ? -1 : 0);

  for (let n = 0; n < max; n++){
      if (S.has(nums[n]) == true)
          doubled = nums[n];
      else
          S.add(nums[n]);
      
      if (S.has(n + 1) == false)
          missing = n + 1;
  }
  
  return [doubled, missing];
};

/************************************************************************ */
