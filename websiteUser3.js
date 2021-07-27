/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
// Find 3 websites that are visited the most in the same order, by different users
// Assumption: a 3-sequence can consist of same website url with different time stamps.
// Are the timestamps sorted?
//Are users clustered, or are they spaced out? Probs not
// Store for every user all the 3-sequence he visited
var mostVisitedPattern = function(username, timestamp, website) {
  // loop thru all 3 arrays looking for 1 name at a time
  // gather all indexes with that user and put in hash
  // { 'jared': [3, 4,6, 99], 'user1': [ 0, 45, 7]}
  
  // Next, for each user in hash, check all indexs
  // and put the websites correlated to them in array.
  // Walk thru every 3-combo permutation sliding window style
  // and put each entry into a frequency hash / priority queue / maxArray
  // {
  //     "home,about,blah": 3,
  //     "about,blah,career": 2,
  // }
  // if(hash[key] === max[0]) max.push(hash[key])
  // max[0] = Math.max(max[0], hash[key])
  
  
  let userHash = {};
  let threehash = {};
  for(let i = 0; i < username.length; i++) {
      if(!userHash[username[i]]) {
          userHash[username[i]] = [i]
      }
      else {
          userHash[username[i]].push(i);
      }
  }
  
  let comboHash = {};     // site url and their frequency
  let maxSite = '';
  let max = 0;
  for(let user of Object.keys(userHash)) {
      // console.log(user)
      let urlIdx = userHash[user];
      let urlList = [];
      urlIdx.forEach(idx => {
          urlList.push([website[idx], timestamp[idx]])
      });
      urlList.sort((a,b) => a[1] - b[1]);
      let windowStart = 0;
      let trios = [[]];
          
      // For each user, get all 3-combo permutations
      for (let windowEnd = 0; windowEnd < urlList.length; windowEnd++) {
           trios[windowStart].push(urlList[windowEnd][0]);     // add the next element
          // slide the window, we don't need to slide if we've not hit the required window size of 'k'
          if (windowEnd >= 3 - 1) {
              // Check if we have a 3uple, put in 3uple hash
              if(trios[windowStart].length === 3) {
                  let sites = trios[windowStart].join(',');
                  comboHash[sites] = comboHash[sites] + 1 || 1;
                  
                  // ** Fix lexi here! ** 
                  if(max === comboHash[sites]) {
                      // sort lexicographically - need to have pointer to last max sites
                      let tempSort = [maxSite.split(',').join(' '), sites.split(',').join(' ')]
                      tempSort.sort((a,b) => {
                          if(a > b)   return 1;
                          if(b > a)   return -1;
                          else    return 0;
                      })
                      maxSite = tempSort[0].split(' ').join(',');
                      console.log('max site if equal ', sites)
                  }
                  else if(max < comboHash[sites]) {
                      console.log('max site now ', sites)
                      max = comboHash[sites];
                      maxSite = sites;
                  }
              }

              windowStart += 1; // slide the window ahead
              trios[windowStart] = trios[windowStart - 1].slice(1);      // 
              
          }
      }
      
      console.log('combohash: ', comboHash)
      
  }
  
  return maxSite.split(',');
};