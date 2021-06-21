// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.

// We count things apart of our island if it is horizontal or vertical connected
// Plan:
// Copy array. Start at the top left of the 2d array, and visit the first row, and all its columns, trying to find the start of the first island
// Once we find a 1, we can increment the number of islands, but we want to know where the island ends.
// So let’s look and follow any of the horizontal or vertical spots near the current position we are on.
// First, let’s mark the current start/visited parts of the islands as visited by turning them into a 0,
// Second, explore all the adjacent possibilities using DFS,
// If one of them is a 1, recursively turn it into a 0 and check its children
// Once we are done, we should have gotten rid of the island that we discovered and can move on to the next island, if it exists in the 2d array

/**
 * @param {character[][]} grid
 * @return {number}
 */
// DFS
const isTouching = (grid, row, col) => {
  // if a point is out of bounds, on the edge of matrix, or 0
  if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === '0') {
      return;
  }
  // 'painting' all visited points
  grid[row][col] = '0'; 
  
  // Visit all points in 'adjacentcy list'
  // top
  isTouching(grid, row - 1, col);
  // right
  isTouching(grid, row, col + 1);
  // left
  isTouching(grid, row, col - 1);
  // bottom
  isTouching(grid, row + 1, col);
  
}

var numIslands = function(grid) {
  // if theres a 1
  //  check if its touching another 1 on 4 sides
  //  if isTouching == true, count remains the same
  //  if isTouching == false, count++
  let gridCopy = grid;
  let count = 0;
  
  for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[i].length; j++) {
          let spot = grid[i][j];
          if(spot === '1') {
              count++
              isTouching(gridCopy,i, j)
          }
          
      }
  }
  
  return count;
};

// Could also build out Adjacentcy list and loop over
let xVector = [1, 0, -1, 0];   // x list
let yVector = [0, 1, 0, -1];   // y list
const dfs = (x, y) => {
  for (let i = 0; i < 4; ++i) {
      const nX = x + xVector[i];
      const nY = y + yVector[i];

      if (nX >= 0 && nX < grid.length && nY >=0 && nY < grid[0].length) {
          if (grid[nX][nY] === '1') {
              grid[nX][nY] = '0'
              dfs(nX, nY);
          }
      }
  }
}