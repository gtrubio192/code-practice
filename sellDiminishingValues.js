/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */

class MaxHeap {
  constructor() {
      this.heap = [];
      this.compareFunc = (a,b) => b - a;
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
var maxProfit = function(inventory, orders) {
  let maxheap = new MaxHeap();
  let total = 0;
  let currCost = 0;
  
  inventory.forEach(order => maxheap.insert(order))
  
  while(orders > 0) {
      orders--;
      currCost = maxheap.extract();
      total += currCost;
      maxheap.insert(currCost - 1);
  }
  return total%100000007
};