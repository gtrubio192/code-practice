// Asked by Facebook

// Write a class called DOMStore that stores a Node and a value (reimplement Map). 
// DOMStore contains the following functions:
// has(node) // returns boolean
// get(node) // returns node or undefined
// set(node, value) // "upsert", update or insert


class DOMStore {
  constructor() {
    this.keys = [];
    this.values = [];
  }

  set(node, value) {
    const index = this.keys.indexOf(node);
    if (index >= 0) {
      this.values[index] = value;
    } else {
      this.values.push(value);
      this.keys.push(node);
    }
  }

  get(node) {
    const index = this.keys.indexOf(node);
    return index >= 0 ? this.values[index] : undefined;
  }

  has(node) {
    return !!this.get(node);
  }
}