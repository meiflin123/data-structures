class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
}

Stack.prototype.push = function(value) {
  this.storage[Object.keys(this.storage).length + 1] = value;
  return value;
};
Stack.prototype.pop = function() {
  var item = this.storage[Object.keys(this.storage).length];
  delete this.storage[Object.keys(this.storage).length];
  return item;
};
Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

  

