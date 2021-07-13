/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
// Submission: O(V + E)
// https://leetcode.com/problems/critical-connections-in-a-network/discuss/1174196/JS-Python-Java-C%2B%2B-or-Tarjan's-Algorithm-Solution-w-Explanation
var criticalConnections = function(n, connections) {
  // create adj hash from connections
  let adj = {};
  for(let i = 0; i < n; i++) {
      adj[i] = [];
  }
  for(const [a,b] of connections) {
      adj[a].push(b);
      adj[b].push(a);
  }
  // create time, discovery[], and low[], bridges[]
  // Note: If we start time at 1 instead of 0, we can use either disc or low as a visited array, 
  // rather than having to keep a separate array for the purpose. Any non-zero value in the 
  // chosen array will then represent a visited state for the given node.
  let time = 1, 
      discovery = new Uint32Array(n),
      low = new Uint32Array(n),
      bridges = [];
  
  const dfs = (curr, prev) => {
      // update time stamp and discovery and low
      discovery[curr] = low[curr] = time++;
  
      // loop thru currents neighbors
      for(let next of adj[curr]) {
          // if we havent visited next...
          if(!discovery[next]) {
              dfs(next, curr);        /// send next down rabbit hole of dfs
              low[curr] = Math.min(low[curr], low[next]);     // maintain lowest common ancestor
          }
          // next has been visited, and as long as next is not the prev node..
          // update low with min value of currs low OR when next was discovered
          // this will eventually find lowest common ancestor in a component
          else if(next !== prev) {
              low[curr] = Math.min(low[curr], discovery[next]);
          }
          // check bridge condition:
          // if the lowest visited node of next is Greater than when curr was discovered,
          // this must be a bridge
          if(low[next] > discovery[curr]) {
              bridges.push([curr, next]);
          }
      }
  }
  
  // call dfs
  dfs(0, -1);
  // return bridges
  return bridges;
};



// curr = 'u' parent vertex of 'v'
// prev = direct parent of u, or node we just came from on last DFS call
const dfs = (curr, prev) => {
  // At each DFS pass, Increment the discovery, and low time of curr
  discovery[curr] = low[curr] = time++;

  // Loop thru each adjacent vertex/node to current
  for(let next of adjList[curr]) {
    // Check our discovery[] to see if next has been visited,
    // if not, send to DFS and get its low value,
    // update low[curr] with new low from DFS
    if(!discovery[next]) {
      dfs(next, curr);
      low[curr] = Math.min(low[curr], low[next]);
    }
    // ** FIND OUT WTF IS GOING ON HERE ***
    // make sure next is not parent
    // lowest ancestor of curr = currs low, or when next was first discovered/visited
    else if(next !== prev) {
      low[curr] = Math.min(low[curr], discovery[next]);
    }
    // Check for bridge condition: low[next] > discovery[curr]
    // if the lowest node that 'next' visited in its DFS is Greater
    // than when 'curr' was discovered, then this means there is no edge
    // backtracking to any of 'curr' ancestors
    if(low[next] > discovery[curr]) {
      ans.push([curr, next]);
    }
  }
}

const criticalConnections = (n, connections) => {
  let adjList = {};
  // create adjacency list/edge map of connections
  for(let i = 0; i < n; i++) {
    adjList[i] = [];
  }
  for(let [a,b] of connections) {
    adjList[a].push(b);
    adjList[b].push(a);
  }
  // Initialize:
  // discovery = [] - stores when in time a node was visited 
  // low[v] = int - indicates earliest visited vertex reachable from subtree rooted with v
  // time = int - indicates the step as you traverse  DFS tree
  // ans = [] - bridges we find
  let discovery = new Uint32Array(n), low = new Uint32Array(n),
    time = 1, ans = [];
  // call DFS with node 0, and -1 bc nothing before 0th node.
  dfs(0, -1);
  return ans;
}