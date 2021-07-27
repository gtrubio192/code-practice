/**
 * @param {number[][]} grid
 * @return {number}
 */
// Time: O(n), <O(n) from queue generation, O(n) in worst case of while> 
// Space: O(n), in worst case that queue is filled with rotten oranges
// n = size of grid
var orangesRotting = function(grid) {
  // BFS vibes
  // 0 - empty
  // 1 - freshie
  // 2 - bad boi
  
  // need a queue of our starting points aka rotten oranges
  // also need to keep count of freshies, and a timer(steps)
  // end condition: freshies === 0 return timer : else -1
  let directions = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  let ROWS = grid.length;
  let COLS = grid[0].length;
  let q = [],
      freshies = 0,
      mins = -1;
  
  for(let i = 0; i < ROWS; i++) {
      for(let j = 0; j < COLS; j++) {
          if(grid[i][j] === 2) {
              q.push([i, j]);
          }
          else if(grid[i][j] === 1) {
              freshies++;
          }
      }
  }
  // q needs at LEAST 1 entry to kick off while loop, start with dummy value
  q.push([-1, -1]);
  // loop thru q while it still has baddies to process
  while(q.length) {
      // process start of queue
      let size = q.length;
      // let [row, col] = q.shift();
      for(let i = 0; i < size; i++) {
          let [row, col] = q.shift();
          for(let [x, y] of directions) {
              let r = row + y;
              let c = col + x;
              // check if next coordinate in bounds and a freshie
              if(r < ROWS && c < COLS && c >= 0 && r >= 0) {
                  if(grid[r][c] === 1) {
                      grid[r][c] = 2;
                      freshies--;
                      q.push([r, c]);
                  }
              }
          }
      }
      mins++;
  }
  
  return freshies === 0 ? mins : -1;
};

// Alternate while loop: check -1 and increment time there
while(q.length) {
  if(row === -1) {
    mins++;
    if(q.length) {
        q.push([-1, -1]);
    }
  }
  else {
    for(let [x, y] of directions) {
        let r = row + y;
        let c = col + x;
        // check if next coordinate in bounds and a freshie
        if(r < ROWS && c < COLS && c >= 0 && r >= 0) {
            if(grid[r][c] === 1) {
                grid[r][c] = 2;
                freshies--;
                q.push([r, c]);
            }
        }
    }
  }
}