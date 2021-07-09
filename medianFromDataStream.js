/**
 * 
 * The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 */

// Solution: can use 2 heaps, 2 pointers, or insertion sort
// https://leetcode.com/problems/find-median-from-data-stream/solution/
var MedianFinder = function() {
  this.finder = [];
  // this.stopStream = false;
};

/** 
* @param {number} num
* @return {void}
*/
// Add using binary search, while searching it also gives you index to 
// Insert new num into proper sorted order
// ** This method would work well when the amount of insertion queries is lesser or about the same as the amount of median finding queries.

// https://leetcode.com/problems/find-median-from-data-stream/discuss/313652/Javascript-O(log-n)-%2B-O(1)-binarySearch-minHeap
MedianFinder.prototype.addNum = function(num) {
  const bs = n => {
      let start = 0;
      let end = this.finder.length;
      while (start < end){
          let mid = Math.floor((start+end)/2);
          if (n > this.finder[mid]) start = mid+1;
          else end = mid;
      }
      this.finder.splice(start,0,n);
  }
  if (this.finder.length === 0) this.finder.push(num);
  else bs(num);
};

// Naive approach to adding
// MedianFinder.prototype.addNum = function(num) {
//       this.finder.push(num);
// };

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  // if arr.len is odd, take Math.floor(arr.len/2)
  // else get average of arr.len/2) and arr.len/2) - 1;
  this.stopStream = true;
  this.finder.sort((a,b) => a - b);
  let len = this.finder.length;
  if(len % 2 ===0) {
      let mid1 = this.finder[len/2];
      let mid2 = this.finder[len/2 - 1];
      // this.stopStream = false;
      return ((mid1 + mid2) / 2).toFixed(2); 
  }
  else {
      // this.stopStream = false;
      return this.finder[Math.floor(len/2)];
  }
};

/** 
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/