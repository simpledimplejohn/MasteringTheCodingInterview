/*
Trees
Root    - beg of the tree
Parent  - start of a branch
Child   - a branch
Leaf    - the end of the tree
Sibling - has same parent

HTML Divs are Trees

abstract syntax tree

made of nodes that contain data
similar to linked list


Bianary Trees
Each node can only have 0,1,2
left and right

Perfect binary tree - more effecient 
  - always doubled
  - half the nodes are on the bottom level
lookup O(log N)
insert O(log N)
delete O(log N)

level 0: 2^0 = 1;
level 1: 2^1 = 2;
level 2: 2^2 = 4;
level 3: 2^3 = 8;

google searches use binary search trees 

Binary Search Tree
  - All child nodes to the right increase
  - All child nodes to the left decrease
  - only two children
  lookup O(log N)
  insert O(log N)
  delete O(log N)

Unbalanced trees become linked lists and are inefficent and become O(n)

Binary Heap top always has a higher value
- lookup O(n)
- lookup O(log N)
- delete O(log N)
good to do comparative operations 

*/
