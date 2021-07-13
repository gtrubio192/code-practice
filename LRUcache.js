const LRUCache = function(capacity) {
  // use javascript Map() as it retains order
  this.cache = new Map();
  this.capacity = capacity;
};

LRUCache.prototype.get = function(key) {
  if (!this.cache.has(key)) return -1;
  
  // if key exists, delete and re-add key to move it to the back
  const val = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, val);
  return val;
};

LRUCache.prototype.put = function(key, value) {
  // if key already in cache, delete and re-add to move it to the back
  if (this.cache.has(key)) {
      this.cache.delete(key);
  } else if (this.cache.size >= this.capacity) {
      // if cache is max size, and key not already in cache, the remove the first item in the Map
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
  }
  
  this.cache.set(key, value);
};



// Free recall

const LRUCache = function(capacity) {
  
};

LRUCache.prototype.get = function(key) {

};

LRUCache.prototype.put = function(key, value) {

};