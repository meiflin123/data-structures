var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  return obj;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this.storage[Object.keys(this.storage).length + 1] = value;
  return value;
};

stackMethods.pop = function() {
  var item = this.storage[Object.keys(this.storage).length];
  delete this.storage[Object.keys(this.storage).length];
  return item;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};





