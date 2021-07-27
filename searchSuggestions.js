// Given an array of strings products and a string searchWord. 
// We want to design a system that suggests at most three product names from products 
// after each character of searchWord is typed. Suggested products should have common 
// prefix with the searchWord. If there are more than three products with a common 
// prefix return the three lexicographically minimums products.

// Return list of lists of the suggested products after each character of searchWord is typed. 

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

 /**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

// Time: O(PlogP + SlogP) , P = products.length, S = searchWord.len
var suggestedProducts = function(products, searchWord) {
  // for every 'keystroke', or for every letter in searchWord.length
  // find up to 3 search suggestions and add to an array of arrays
  products.sort();
  let results = [];
  let searchLen = searchWord.length;
  let productLen = products.length;
  let typed = '';
  
  const binarySearch = (target) => {
      let left = 0,
          right = productLen - 1;
      
      while(left < right) {
          const mid = (left + right) >> 1;
          const subStr = products[mid].slice(0, target.length);
          
          if(target > subStr) {
              left = mid + 1;
          }
          else {
              right = mid;
          }
      }
      return left;
  }
  
  for(let i = 0; i < searchLen; i++) {
      typed += searchWord[i];
      const typedResult = [];
      const idx = binarySearch(typed);
      
      for(let j = idx; j < productLen && j < idx + 3; j++) {
        if(products[j].startsWith(typed)) {
              typedResult.push(products[j]);
          }
          else {
              break;
          }
      }
      results.push(typedResult);
  }
  return results;
  
};

// Time: O(nlogn + m*n ), m = length of a word
var suggestedProducts = function(products, searchWord) {
  // for every 'keystroke', or for every letter in searchWord.length
  // find up to 3 search suggestions and add to an array of arrays
  products.sort();
  let results = [];
  let searchLen = searchWord.length;
  let typed = '';
  for(let i = 0; i < searchLen; i++) {
      typed += searchWord[i];
      let typedResult = [];
      const typedResult = products.filter(x => x.startsWith(typed)).slice(0, 3);
      // for(let word of products) {
      //     if(word.startsWith(typed) && typedResult.length < 3) {
      //         typedResult.push(word);
      //     }
      //     if(typedResult.length === 3)    break;
      // }
      results.push(typedResult);
  }
  return results;
  
};