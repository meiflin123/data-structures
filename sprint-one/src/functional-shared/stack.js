var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  stackMethods.push = function(value) {
    storage[Object.keys(storage).length + 1] = value;
    return value;
    
  };

  stackMethods.pop = function() {
    var item = storage[Object.keys(storage).length];
    delete storage[Object.keys(storage).length];
    return item;
    
  };

  stackMethods.size = function() {
    return Object.keys(storage).length;
    
  };
  return stackMethods;
};

var stackMethods = {};


