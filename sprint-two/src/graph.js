

// Instantiate a new graph
var Graph = function() {
  var graph = Object.create(Graph.prototype);
  graph.array = [];
  return graph;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var value = {};
  value.value = node;
  value.edge = [];
  this.array.push(value);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i].value === node) {
      this.array.splice(i, node);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.array.length; i++) {
    for (var j = 0; j < this.array.length; j++) {
      if (this.array[i].edge.includes(toNode) && this.array[j].edge.includes(fromNode)) {
        return true;
      }
      if (this.array[i].edge.includes(fromNode) && this.array[j].edge.includes(toNode)) {
        return true;
      } 
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i].value === fromNode) {
      this.array[i].edge.push(toNode);
    }
    if (this.array[i].value === toNode) {
      this.array[i].edge.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.array.length; i++) {
    if (this.array[i].value === fromNode && this.array[i].edge.includes(toNode)) {
      this.array[i].edge.splice(this.array[i].edge.indexOf(fromNode), 1);
    }
    if (this.array[i].value === toNode && this.array[i].edge.includes(fromNode)) {
      this.array[i].edge.splice(this.array[i].edge.indexOf(toNode), 1);
    }
  }
		
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.array.length; i++) {
    cb(this.array[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
