var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var val = Node(value);
    list.tail = val;
    if (list.head === null) {
      list.head = val;
    } else {
      var headNext = list.head.next;
      headNext = val;
      list.head.next = headNext;
    }
  };

  list.removeHead = function() {
    var formerHead = list.head.value;
    list.head = list.head.next;
    return formerHead;

  };

  list.contains = function(target) {
    var node = this.head;
    var result = true;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };
  
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
