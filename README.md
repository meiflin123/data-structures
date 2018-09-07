# data-structures
This is a project I completed as a student at [hackreactor](http://hackreactor.com). This project was worked on with a pair.



# To do: Object-Oriented Programming
Implement data structures in each of the instantiation styles. 

# Instantiation Styles
1. Functional instantiation</br>
2. Functional instantiation with shared methods</br>
3. Prototypal instantiation</br>
4. Pseudoclassical instantiation</br>
5. ES6 instantiation</br>


# data structures
### Queue
A queue works like a line for an amusement park ride -- people enter at the end of the queue and leave from the front (FIFO: first in, first out).
### Stack
A stack works like a stack of plates -- plates are added and removed from the the top of the stack (LIFO: last in, first out).
### Linked List
A linked list is a dynamic data structure that allows for constant time insertion and removal at any point in the linked list (compare this to an array which on average has linear time insertion and removal operations). In exchange for this insertion and removal speed, linked lists are not indexed and any find operations on a link list require the linear time operation of traversing the entire linked-list from the beginning.
### Tree
A tree is a hierarchical data structure consisting of a node (potentially) with children. The children are trees unto themselves, that is, nodes with (potential) children. For this reason the tree is referred to as a recursive data structure.
### Graph
Graphs consist of nodes (often referred to as vertices) and edges (often referred to as arcs) that connect the nodes. Unlike trees, graphs are not necessarily hierarchical. Graphs can be undirected, which means that the relationship of any 2 nodes connected by an edge is a symmetrical relationship, or they can be directed, which means there is an asymmetrical relationship between nodes that are connected by an edge. You will be implementing an undirected graph.
### Set
Sets contain unique values in no particular order.
### Hash Table
Hash tables (sometimes called hash maps) store key value pairs. They do so in a memory efficient way by using a 'hashing function' that translates keys into numerical indices located within a fixed block of memory (think about the contiguous blocks of memory used in arrays). Hash tables only increase their size in memory when necessary, and reduce their size in memory when possible.
### Binary Search Tree
Binary trees are trees that can only have 0, 1, or 2 children. Remember that trees are recursive data structures and therefore a tree's children are themselves trees and can each have 0, 1, or 2 children. In a binary search tree, one child (out of potentially two) will always be less than the node's value (based on whatever sorting condition you wish) and the other child will always be greater than the node's value. Whether it is the 'left' or the 'right' child which is greater or lesser is consistent throughout the binary search tree. This structure results in particularly fast find operations. You'll be asked to answer just how fast yourself.
