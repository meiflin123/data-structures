// every child inherit all properties.
var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];// fix me

  return newTree;
};
var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};