// Given a function that takes n,m , compute the number of paths there are from 
// top left to bottom right of a n x m matrix
// Assume n and m > 0

const numPaths = (n, m) => {
  if(n === 1 || m === 1) {
    return 1;
  }
  return numPaths(n, m - 1) + numPaths(n - 1, m);
}


console.log(numPaths(7,7));