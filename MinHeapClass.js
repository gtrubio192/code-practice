class MinHeap {
  constructor(compareFunc, k) {
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

// Examples
let compare = (a,b) => a - b;
let heap = new MinHeap(compare);

heap.insert(666)
console.log('First element ', heap.peek());
console.log('Heap size ', heap.size);

class MinHeap {
  constructor(compare) {
    this.heap = [];
    this.compare = (a,b) => a - b;
  }
  insert(num) {
    let start = 0,
      end = this.heap.length();
    // binary search + insertion sort
    while(start < end) {
      let mid = (end + start) >> 1;
      if(num > this.heap[mid]) {
        start = mid + 1;
      }
      else {
        end = mid;
      }
    }
    this.heap.splice(start, 0, num)

    // this.heap.push(num);
    // this.heap.sort(this.compare);
  }
  extract() {
    if(this.heap.length === 0)  return null;
    return this.heap.shift();
  }
  peek() {
    return this.heap[0];
  }
  get size() {
    return this.heap.length;
  }
}