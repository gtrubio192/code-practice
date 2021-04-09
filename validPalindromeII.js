/**
 * 
 * Given a non-empty string s, you may delete at most one character. 
 * Judge whether you can make it a palindrome.
 */
function validPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while(start < end) {
    if(str[start] !== str[end]) {
    //check both ways, slice here is not so intuitive
    // let slice1 = str.slice(start, end)
    // let slice2 = str.slice(start + 1, end + 1)
    // compare sub strings
    // slice1 = str including first mismatch excluding the second
    // slice2 = str including second mismatch(at end) excluding the first char
    // ex) slice1: 'tebbe', slice2: 'ebbem', str: 'aatebbemaa'
      return isValidYet(str.slice(start, end))
        || isValidYet(str.slice(start + 1, end + 1));
    }

    start++;
    end--;
  }

  return true;
}

// just checking is regular palindrome
function isValidYet(s) {
  for(let i = 0; i < s.length / 2; i++) {
    if(s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// **********************************************************
// More elegant solution of above, uses slight recursion since we just need to check if substrings are palis
// **********************************************************
var validPalindrome = function(s, corrections = 1) {
  let lo = 0;
  let hi = s.length - 1;
  
  while (lo < hi) {
    // if recursive call is pali, everything after continue in while loop wont excecute
    if (s[lo] === s[hi]) {
      lo++;
      hi--;
      continue;
    }
    // In recursive call, if there is mismatch, return false
    if (corrections === 0) {
      return false;
    }
    // instead of creating a new function, just call itself again
    // this time with 'corrections' to keep track of how many loops in we are. 
    // Should only call itself once per call.
    // Would need both calls to return false to know too many mismatches
    return validPalindrome(s.slice(lo, hi), 0) 
      || validPalindrome(s.slice(lo + 1, hi + 1), 0);
  }
  
  return true;
};

// my submission (wrong on some edge cases)
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  // first, check if s is a palindrome -> return true
  // if s is NOT pali, mark the index of mismatch, keep searching for at least 1 more mismatch
  // if second mismatch found, return false
  // else if only one mismatch found, return true
  let left = 0;
  let right = s.length - 1;
  let misMatches = 0;
  let idx = null
  
  while(misMatches < 2 && left < right) {
      // check if we've found first mismatch
      if(s[left] !== s[right] && misMatches === 0) {
          misMatches += 1;
          idx = left
      }
      // check if second mismatch found
      else if(s[left] !== s[right] && misMatches > 0) {
          misMatches += 1;
      }
      left++;
      right--;
  }
  if(s.length <= 3 && misMatches > 0) {
      return false;
  }
  return misMatches > 2 ? false : true
};