// sort approach:
// - need to compute all distances, we can just omit the sqrt and just do x^2 + y^2
// - need to sort by the distance: best: n log(n)
// - do quicksort with a custom sorting function, then take the first k elements from the array
// runtime: O(N log(N))
// space: O(1)

const kClosestPoints = (points, K) => {
  return points.sort((a,b) => getLen(a) - getLen(b)).slice(0, K)
}

const getLen = ([a,b]) => {
  return a*a + b*b
}