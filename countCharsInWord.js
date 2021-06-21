// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.


/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  // create map of chars for each iteration
  let total = 0;
  for(let w of words) {
      let charMap = createMap(chars);
      if(isGoodWord(w, charMap)) {
          total += w.length;
      }
  }
  
  return total;
};

const createMap = (letters) => {
  let map = {};
  for(let i = 0; i < letters.length; i++) {
      map[letters[i]] = map[letters[i]] + 1 || 1;
  }
  return map;
}

const isGoodWord = (word, chars) => {
  for(let i = 0; i < word.length; i++) {
      if(!chars[word[i]] || chars[word[i]] === 0) {
          return false;
      }
      chars[word[i]]--;
  }
  
  return true;
  
}