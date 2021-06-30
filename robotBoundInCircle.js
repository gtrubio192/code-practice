/**
 * @param {string} instructions
 * @return {boolean}
 */
// Idea: There could be two situations here. See 'limit cycle trajectory'

// First, if the robot returns to the initial point after one cycle, that's the limit cycle trajectory (return true).

// Second, if the robot doesn't face north at the end of the first cycle, that's the limit cycle trajectory (return true). 
// Once again, that's the consequence of the plane symmetry for the repeated cycles 
const isRobotBounded = (instructions) => {
  // Initial position in grid
  let x = 0,
      y = 0;
  // Direction robot is facing, originally north
  let direction = 0;
  // Moves for a 'G' instruction
  // north = 0, east/right = 1, south = 2, west/left = 3 
  const possibleDirections = {0: [0, 1], 1: [1, 0], 2: [0, -1], 3: [-1, 0]};
  for(let i = 0; i < instructions.length; i++) {
    if(instructions[i] === 'L') {
      // 3 rights make a left
      direction = (direction + 3) % 4
    }
    else if(instructions[i] === 'R') {
      direction = (direction + 1) % 4
    }
    // Update x and y position with 'G'
    else {
      x += possibleDirections[direction][0];
      y += possibleDirections[direction][1];
    }
  }

  // Cycle found if 
  // Return to origin : (x,y) = (0,0)
  // Or, not facing north(0)
  return (x === 0 && y === 0) || direction !== 0;
}






// Original code, way off with only counting frequencies of instructions

// getting palindrome vibes - if instructions pali then return true
var isRobotBounded = function(instructions) {
  // use hash to count frequencies of instructions
  // if number of L == R, seems to be infinite path, aka false
  // if L !== R (L > R || R > L), seems to be true
  // exception: if G == 0, return true
  let hash = {};
  for(let i = 0; i < instructions.length; i++) {
      hash[instructions[i]] = hash[instructions[i]] + 1 || 1;
  }
  console.log('R is ', hash['R'])
  if(!hash['G']) return true;
  if(!hash['L'] && !hash['R'] && hash['G'] > 0) {
      console.log('first false')
      return false;
  }
  if(hash['L'] === hash['R']) {
      console.log('second false')
      return false;
  }
  if(hash['L'] !== hash['R'] && Object.keys(hash).length === 3) return true;
  // edge case: No R, but G > L
  if(Object.keys(hash).length < 3 && hash['G']) {
      if(hash['L'] && hash['G']%2 === 0) {
          return true;
      }
      else {
          return false;
      }
      if(hash['R'] && hash['G']%2 == 0) {
          return true;
      }
      else {
          return false;
      }
  }
};