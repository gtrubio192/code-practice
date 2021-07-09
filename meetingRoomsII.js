/**
 * @param {number[][]} intervals
 * @return {number}
 */

// Final solution - basically does a simplified min heap
// Time: O(nlogn)
var minMeetingRooms = function(intervals) {
  // sort meetings by start time
  // keep count of overlaps (# of rooms) with max counter

  if(!intervals.length) return 0;
  
  let rooms = [];
  let start = 0;
  let end = 1;
  let maxRooms = 0;
  intervals.sort((a,b) => a[0] - b[0]);
  intervals.forEach((meeting) => {
    // check if next meetings start is after the next available room
    if(rooms.length > 0 && meeting[start] >= rooms[0]) {
        rooms.shift();
    }
    rooms.unshift(meeting[end]);
    rooms.sort((a,b) => a - b);
    maxRooms = Math.max(maxRooms, rooms.length);
  });
  
  return maxRooms;
};


// First solution
// Time: O(n*r*logn)   - r being roomCounts length
var minMeetingRooms = function(intervals) {
  // sort meetings by start time
  // if there are overlapping meetings, need new room
  // keep count of overlaps (# of rooms) - perhaps an array or obj

  if(!intervals.length) return 0;
  
  let roomCount = [];
  intervals.sort((a,b) => a[0] - b[0]);
  // fill first room
  roomCount.push({ timeSlot: intervals[0]});
  
  // Overlap = startTimeB < endTimeA
  for(let i = 1; i < intervals.length ; i++) {
      let startB = 0, endTimeA = 1;
      let freeSlot = false;
      let spot = undefined;
      
      // loop thru rooms already created and check for unused rooms
      roomCount.forEach((room, idx) => {
          if(intervals[i][startB] >= room.timeSlot[endTimeA]) {
              freeSlot = true;
              spot = idx
          }
      });
      
      if(freeSlot) {
          // swap out unused time slot with one in use
          roomCount[spot].timeSlot = intervals[i]; 
      }
      else {
          // create another room
          roomCount.push({ timeSlot: intervals[i] });
      }
  }
  return roomCount.length;
};

// ******************* Min Heap Solution *******************
// Time: O(nlogn) - n for loop, logn for sorting/inserting heap
const minMeetingRooms = (intervals) => {
  const   compareFunc = (a, b) => a - b,
          minHeap = new MinHeap(compareFunc);
  
  intervals.sort((a, b) => a[0] - b[0]);  // logn
  
  let maxRooms = 0;
  
  intervals.forEach(interval => {
      // if next ending time <= curr meeting start
      if(minHeap.size > 0 && minHeap.peek() <= interval[0]) {
          minHeap.extract();
      }
      
      minHeap.insert(interval[1]);  // logN bc we sort heap internally
      
      maxRooms = Math.max(maxRooms, minHeap.size);
  });
  
  return maxRooms;
};

// since JS does not have a native heap, 
// for an interview you can quickly code-up something like this
// letting interviewer know what you are doing
class MinHeap {
  constructor(compareFunc) {
      this.compareFunc = compareFunc;
      this.heap = [];
  }
  
  insert(val) {
      this.heap.unshift(val);
      this.heap.sort(this.compareFunc);
  }
  
  extract() {
      if (this.size === 0) return null;
      return this.heap.shift();
  }
  
  peek() {
      if(this.size === 0) return null;
      return this.heap[0];
  }
  
  get size() {
      return this.heap.length;
  }
}