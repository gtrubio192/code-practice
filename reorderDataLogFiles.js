
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  // use 2 pointers to sort all 'letX' items to the left of array
  // if an item is 'letX', move to left
  // use a LTE function to sort 'letX' items lexicographically
  
  const lets = [],
        nums = [];
  
  for(let i = 0; i < logs.length; i++) {
      let firstItem = logs[i].split(' ')[1];     
      if(isNaN(firstItem)) {
          lets.push(logs[i])
      }
      else {
          nums.push(logs[i])
      }
  }
  
  lets.sort((a,b) => {
      a = a.split(' ');
      b = b.split(' ');
      let aId = a.shift();
      let bId = b.shift();
    
      a = a.join(' ');
      b = b.join(' ');
      if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        }
      else if (a === b) {
          if (aId > bId) {
              return 1;
          } else if (aId < bId) {
              return -1;
          }
          return 0;
      }
  })
  return [...lets, ...nums]
};

// Longer version
var reorderLogFiles = function(logs) {
  // use 2 pointers to sort all 'letX' items to the left of array
  // if an item is 'letX', move to left
  // use a LTE function to sort 'letX' items lexicographically
  let left = 0,
      right = logs.length - 1;
  
    while(left < right) {
        let firstItemR = logs[right].split(' ')[1];     // optimize by caching
        let idR = logs[right].split(' ')[0];
        let firstItemL = logs[left].split(' ')[1];
        let idL = logs[left].split(' ')[0];
      
        // case 1: item on right is a number item
        if(!isNaN(firstItemR)) {
            right--;
        }
        // case 2: item on left is a word item
        else if(isNaN(firstItemL)) {
            left++;
        }
        // case 3: left is a num and right is word item, 
        //      insert word item 1 index before num item
        else if(isNaN(firstItemR) && !isNaN(firstItemL)) {
            let switcher = logs[right]
            logs = logs.filter(item => item !== logs[right])
            logs.splice(left, 0, switcher);
        }
        // case 4: both left and right are word items, sort
        else if(isNaN(firstItemR) && isNaN(firstItemL)) {
            left++
            right--;
        }
    }
  
    const letters = logs.slice(0,left+1);
    const numbers = logs.slice(left+1);
    letters.sort((a,b) => {
        a = a.split(' ');
        b = b.split(' ');
        let aId = a.shift();
        let bId = b.shift();
      
        a = a.join(' ');
        b = b.join(' ');
        if (a > b) {
            return 1;
          } else if (a < b) {
            return -1;
          }
        else if (a === b) {
            if (aId > bId) {
                return 1;
            } else if (a < b) {
                return -1;
            }
            return 0;
        }
    })
    return [...letters, ...numbers]
};


const reorderPractice = (logs) => {
    let lets = [], nums = [];

    for(let i = 0; i < logs.length; i++) {
        let item = logs[i].split(' ')
        if(isNaN(item[1])) {
            lets.push(logs[i]);
        }
        else {
            nums.push(logs[i]);
        }
    }

    lets.sort((a,b) => {
        const aSpaceIdx = a.indexOf(' ');
        const bSpaceIdx = b.indexOf(' ');

        a = a.substr(aSpaceIdx);
        b = b.substr(bSpaceIdx);
        let aId = a.substr(0, aSpaceIdx);
        let bId = b.substr(0, bSpaceIdx);

        if(a > b) {
            return 1;
        }
        else if(a < b) {
            return -1;
        }
        else if(a === b) {
            if(aId > bId) {
                return 1;
            }
            else if(aId < bId) {
                return -1
            }
            return 0;
        }

    });

    return [...lets, ...nums]
}

let log = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"];

console.log(reorderPractice(log));

// Free recall

// Can assume that the identifiers can be a combo of letters/numbers/uppercase
// reorder logs so that letter logs come first and ordered lexigraphically, digit logs retain relative order
// if letter log is same lexi, then order lexig by their identifier - use 'localeCompare' function or manual sorting
// Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
// Time: O(n + klogk), n = logs size, k = letters size, logk = sortings
var reorderLogFiles = function(logs) {
    // First thought is to separate into letter and digit arrays
    let letters = [],
        digits = [];

    logs.forEach(log => {
        // check if first token is a word
        if ( isNaN(log.split(' ')[1]) ) {
            letters.push(log);
        }
        else {
            digits.push(log);
        }
    });

    letters.sort((a,b) => {
        // CORRECTION: need to further split a and b to get thier values, this only pops off ids
        // but a and b stay the same, aka a = "g1 act car"
        // Use indexOf(' ') and split or substring to properly break up ids and logs
        let aIdx = a.indexOf(' ');
        let bIdx = b.indexOf(' ');
        
        let id1 = a.split(' ').shift();
        let id2 = b.split(' ').shift();
        a = a.split(' ').slice(aIdx).join(' ');
        b = b.split(' ').slice(bIdx).join(' ');

        // CORRECTION: a needs to be greater than b to return a positive value
        // arr.sort((a,b) => a - b)     - this sorts in increasing/lexi order, a > b in order to get (+) return val
        // if(a > b)
        if(a < b) {
            return 1;
        }
        // CORRECTION: 
        // if(b > a)
        else if(a > b) {
            return -1;
        }
        else if(a === b) {
            // CORRECTION: Same as above
            if(id1 < id2) {
                return 1;
            }
            else if(id1 > id2) {
                return -1;
            }
            else {
                return 0;
            }
        }
    });

    return [...letters, ...digits];

}