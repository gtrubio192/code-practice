// Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.
// A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.
// Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
// Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

/**
 * @param {string[]} words
 * @return {string[]}
 */

// Solution from: 
// https://www.youtube.com/watch?v=PY1LSBx-cNs
// Note the constraint: 0 <= words[i].length <= 1000   ==> if its less than 10k, can use recursion as solution
// Time: O(m*n^2),   Space: O(n)

// 2 Optimizations: 
// memo the true returned values/words - use in a top down recursion solutions
// find min length of any word, and use that in isConcat's for loop
let tempCache = new Set();
let min = Math.MAX_SAFE_INTEGER;

var findAllConcatenatedWordsInADict = function(words) {
  let results = [];  // new Unint32();
  let dict = new Set(words);

  // Optimization 2
  // for(let word of words) {
  //   min = Math.min(min, word.length);
  // }

  for(let word of words) {
    if(isConcat(word, dict)) {
      results.push(word)
    }
  }
  return results;
}

// Search all substrings of a word, and check each substr in our dictionary
const isConcat = (word, dict) => {
  // Optimization 1 - didnt actually work?
  // if(tempCache.has(word)) return true;

  // Optimization 2
  // for(let i = min; i < word.length - min; i++) {
  for(let i = 1; i < word.length; i++) {
    let left = word.substring(0, i);
    let right = word.substring(i);
    if(dict.has(left)) {
      if(dict.has(right) || isConcat(right, dict)) {
        tempCache.set(word);
        return true;
      }
    }
  }
  return false;
}

// Original Attempt - close, but was not returning some words if
// there was a concatednated word comprised of 'cat' and 'cats'
// whole = cats
// whole = whole - 'cat' => 's' would be left over and return wrong answer
var findAllConcatenatedWordsInADict = function(words) {
  // loop thru words and see if words[i] is a substring in any other word
  // if it is a substring, add words[i]  
  let w1 = 'boofoofooboo'
  let w2 = 'foo'
  let regex = new RegExp(w2, 'g')
  w1 = w1.replace(regex, '')
  
  let candidates = {};
  let dict = {};
  for(let i = 0; i < words.length; i++) {
      dict[words[i]] = words[i];    // Shoulda used a Set()! lolol
  }
  
  for(let word in dict) {
      for(let i = 0; i < words.length; i++) {
          if(word.includes(words[i]) && word !== words[i]) {
              if(!candidates[word])   candidates[word] = [];      // possibly make this another hash
              // need to make sure words[i] does not already exist in a smaller way
              // inside of candidates[word]
              // if(dict[words[i]])
              candidates[word].push(words[i]);
          }
      }
  }
  console.log(candidates);
  let results = [];
  
  // THIS IS WHERE MY ** DFS ** SHOULD START 
  // for(let concatenated in candidates) {
  //     let adjWords = candidates[concatenated];
  //     let visited = new Array(adjWords.length - 1).fill(0);
  //     for(let i = 0; i < adjWords.length; i++) {
  //         if(visited[i] === 0) {
  //             dfs(adjWords, visited, i, concatenated);
  //         }
  //     }
  // }
  // DFS END
  
  
  // for(let concatWord in candidates) {      // alternate for loop
  for(let concatWord of Object.keys(candidates)) {
      let whole = concatWord;
      let wordBlocks = candidates[concatWord];
      let i = 0;
      while(whole.length && i < wordBlocks.length) {
          let regex = new RegExp(wordBlocks[i], 'g');
          whole = whole.replace(regex, '');
          i++;
      }
      if(whole.length === 0) {
          results.push(concatWord);
      }
  }
  console.log(results);
  return results;
};


const dfs = ( adjWords, visited, i, concatenated) => {
  visited[i] = 1;
  for(let wordBlock of adjWords) {
      
  }
  
}