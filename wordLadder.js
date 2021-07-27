/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const neighborsInDict = (word, dict) => {
  // let original = word;
  word = word.split('');
  let len = word.length;
  let combos = [];
  for(let i = 0; i < len; i++) {
      let tempLetter = word[i];
      for(let j = 0; j < 26; j++) {
          word[i] = String.fromCharCode(97 + j);
          let joinedWord = word.join('');
          if(dict.has(joinedWord)) {
              combos.push(joinedWord);
          }
      }
      word[i] = tempLetter;
  }

  // list of all permutations for any given word
  return combos;
}
// Use BFS strategy - basically traversing a graph level by level
// Time: O(M^2 * N)
// Space: O(M*N)
var ladderLength = function(beginWord, endWord, wordList) {
  // starting from beginWord, need to replace each letter of a word with a-z, 
  // and see if that permutation is in wordList. If a permutation is in wordList, 
  // increase a counter. 
  // at beginning of each iteration, if a perm === endWord, return counter.
  // If after checking every word in wordList, return 0 bc it has not been found.
   
  let steps = 0;
  let dict = new Set(wordList);
  let q = [];
  dict.delete(beginWord);
  q.push(beginWord);
  while(q.length) {
      let size = q.length;
      steps++;
      
      for(let i = 0; i < size; i++) {
        // process element in queue
        let word = q.shift();
        // check if this word is our target endWord
        if(word === endWord)    return steps
        // generate list of neighbor words that exist in dictionary
        let neighbors = neighborsInDict(word, dict);
        // add all neighbors to queue, 
        // and DELETE each neighbor form dictionary so we dont over process
        q.push(...neighbors);
        for(let neigh of neighbors) {
            dict.delete(neigh);
        }
      }
  }
  return 0;
}