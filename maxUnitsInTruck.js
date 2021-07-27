// You are assigned to put some amount of boxes onto one truck. 
// You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

// numberOfBoxesi is the number of boxes of type i.
// numberOfUnitsPerBoxi is the number of units in each box of the type i.
// You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck.
// You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

// Return the maximum total number of units that can be put on the truck.

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  // So each boxtype has number of boxes per type, and number of units in each box
  // Maximize num of units on the truck
  // Sort boxes by units
  // In loop, choose from boxes with most # of units 
  // and check # boxes against truckSize
  let units = 0;
  boxTypes.sort((a,b) => b[1] - a[1]);
  while(truckSize > 0 && boxTypes.length) {
      let [numBoxes, unitVal] = boxTypes.shift();
      if(numBoxes === 0) {
          continue;
      }
      // Instead of 1 by 1, we should load 
      // all the boxes we can on each iteration
      let boxes = Math.min(truckSize, numBoxes);
      units += boxes*unitVal;
      truckSize -= boxes;
      numBoxes -= boxes;
      // if(truckSize >= numBoxes) {
      //     units += numBoxes*unitVal;
      //     truckSize -= numBoxes;
      //     numBoxes = 0;
      // }
      // // truckSize < numBoxes
      // else {
      //     let boxes = numBoxes - truckSize; 
      //     units += truckSize*unitVal;
      //     truckSize = 0;
      // }
      numBoxes > 0 ? boxTypes.unshift([numBoxes, unitVal]) : null;
  }
  return units;
};