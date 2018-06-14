var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  return obj;

};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.storage[Object.keys(this.storage).length + 1] = value;
  return value;
    
};

queueMethods.dequeue = function() {
  var item = null;
  if (Object.keys(this.storage).length >= 2) {
    item = this.storage[Object.keys(this.storage).length - 1];
    delete this.storage[Object.keys(this.storage).length - 1];
    var arr = [];
    for (var key in this.storage) {
      arr.push(this.storage[key]);
    }
      
    this.storage = {};
    var count = 1;
    for (var i = 0; i < arr.length; i++) {
      this.storage[count] = arr[i];
      count++;
    }
    return item;
  } else {
    item = this.storage[Object.keys(this.storage).length];
    delete this.storage[Object.keys(this.storage).length];
    return item;
  }
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};


