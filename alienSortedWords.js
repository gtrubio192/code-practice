// In an alien language, surprisingly they also use english lowercase letters, 
// but possibly in a different order. The order of the alphabet is some permutation 
// of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, 
// return true if and only if the given words are sorted lexicographicaly in this alien language.
// https://leetcode.com/problems/verifying-an-alien-dictionary/
// Solution used: https://leetcode.com/problems/verifying-an-alien-dictionary/discuss/877634/Javascript-easy-to-understand

// Game plan: 
// create hash of alien alphabet using FOR loop with key=letter, val=idx
// create less than or equal to function (for each adjacent words). Check words letter by letter
// using our hash -> hash[a[i]] < hash[b[i]]
// loop thru adjacent pairs

var isAlienSorted = function(words, order) {
  const m = {};
  // create lookup hash for alien alphabet
  for (let i = 0; i < order.length; ++i) m[order[i]] = i;
  
  // less than or equal to
  const isLTE = (a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); ++i) {
      if (m[a[i]] < m[b[i]]) return true;
      if (m[a[i]] > m[b[i]]) return false;
    }
    return a.length <= b.length;
  }
  // loop thru words, chcking each adjacent words
  // "if not less than or equal to, words are out of order"
  for (let i = 0; i < words.length - 1; ++i) {
    if (!isLTE(words[i], words[i+1])) return false;
  }
  return true;
};