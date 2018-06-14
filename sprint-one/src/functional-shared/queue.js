var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  queueMethods.enqueue = function(value) {
    storage[Object.keys(storage).length + 1] = value;
    return value;
  };

  queueMethods.dequeue = function() {
    var item = null;
    if (Object.keys(storage).length >= 2) {
      item = storage[Object.keys(storage).length - 1];
      delete storage[Object.keys(storage).length - 1];
      var arr = [];
      for (var key in storage) {
        arr.push(storage[key]);
      }
      // create a new storage that the key are ascending and no spaces. 
      storage = {};
      var count = 1;
      arr.forEach(function (x) {
        storage[count] = x;
        count++;
      });
      return item;
    } else {
      item = storage[Object.keys(storage).length];
      delete storage[Object.keys(storage).length];
      return item;
    }
  };

  queueMethods.size = function() {
    return Object.keys(storage).length;
  };

  return queueMethods;
};

var queueMethods = {};


