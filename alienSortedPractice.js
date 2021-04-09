var isAlienSorted = function(words, order) {
  let hash = {};

  for(let i = 0; i < order.length; i++) hash[order[i]] = i;

  const isLTE = (a,b) => {
    for(let i = 0; i < Math.floor(a.length, b.length); i++) {
      if(hash[a[i]] > hash[b[i]]) return false;
      if(hash[a[i]] < hash[b[i]]) return true; 
    }
    return a.length <= b.length
  }

  for(let j = 0; j < words.length -1; j++) {
    if(!isLTE(words[j], words[j+1]))  return false
  }

  return true;
};

let order = 'zbcdefghijklmnopqrstuvwxya';
let words1 = ["leetcode", "bonzai", "masacre", "teeoff", "zeebra", "asperagus"];
let words2 = ["zzzzzebra", "zeetcodejkj", "bonzi", "mare", "teeff", "asperagus"]
console.log(isAlienSorted(words2, order));