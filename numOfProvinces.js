/**
 * @param {number[][]} isConnected
 * @return {number}
 */

// Each index is a city, same city on row and col
// here, city 0(horizontal) is connected to city 1 (vertical) bc their coordinates have a 1.
// Since our indexes are 0,1,2 - we have 3 cities(nodes) to traverse
//.   0 1 2   city
// 0 [1,1,0],
// 1 [1,1,0],
// 2 [0,0,1]

// DFS Solution 
// Time: O(n^2) since we traverse nxn matrix, Space: O(n)
// Smarter way to do it
const findProvince = (isConnected, visited, i) => {
  visited[i] = 1;
  let len = isConnected.length
  for(let j = 0; j < len; j++) {
      if(isConnected[i][j] === 1 && visited[j] === 0) {
          findProvince(isConnected, visited, j)
      }
  }
}

var findCircleNum = function(isConnected) {
  let n = isConnected.length;
  let visited = new Array(n).fill(0);
  let adj = {};
  let num = 0;
  for(let i = 0; i < n; i++)  adj[i] = [];
  
  for(let i = 0; i < n; i++) {
      if(visited[i] === 0) {
          findProvince(isConnected, visited, i);
          num++;
      }
  }
  
  return num;
};


// Solution if we forced it into 'Number of Islands Problem' by creating adj array.
// Dont necessarily need adj array since isConnected can serve as that
const findProvince = (adj, visited, city) => {
  visited[city] = 1;
  let cities = adj[city];
  for(let neigh of cities) {
      if(visited[neigh] === 0) {
          findProvince(adj, visited, neigh);
      }
  }
}

var findCircleNum = function(isConnected) {
  let n = isConnected.length;
  let visited = new Array(n).fill(0);
  let adj = {};
  let num = 0;
  for(let i = 0; i < n; i++)  adj[i] = [];
  
  for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
          if(isConnected[i][j] === 1 && i !== j) {
              adj[i].push(j);
              adj[j].push(i);
          }
      }
  }
  
  for(let node in adj) {
      if(visited[node] === 0) {
          findProvince(adj, visited, node);
          num++
      }
  }
  
  return num;
};