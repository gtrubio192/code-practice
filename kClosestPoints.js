const kClosestPoints = (points, K) => {
  return points.sort((a,b) => getLen(a) - getLen(b)).slice(0, K)
}

const getLen = ([a,b]) => {
  return a*a + b*b
}