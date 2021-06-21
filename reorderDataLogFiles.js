
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