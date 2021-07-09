// *** Need to fix insert


/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.set = {};
  this.list = [];
};

/**
* Inserts a value to the set. Returns true if the set did not already contain the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  let newEntry = false;
  if(this.set[val] === undefined) {
      newEntry = true;
      this.set[val] = this.list.length;
      this.list.push(val);
  }
  return newEntry;
};

/**
* Removes a value from the set. Returns true if the set contained the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  let found = false;
  if(this.set[val] !== undefined) {
      found = true;
      let idx = this.set[val];
      
      delete this.set[val];
      this.set[this.list[idx]] = idx;
      if(this.list[this.list.length-1] === val) {
          this.list.pop();
      } else {
          [this.list[this.list.length-1], this.list[idx]] = [this.list[idx], this.list[this.list.length-1]];
          this.list.pop();
      }
  }
  return found;
};

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  let randomStop = Math.floor(Math.random() * (this.list.length ));
  // let randomNum = null;
  // Object.entries(this.set).forEach(([key, val], i) => {
  //     if(i === randomStop) {
  //         randomNum = val;
  //     }
  // });
  
  return this.list[randomStop];
};

/** 
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/