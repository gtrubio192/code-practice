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