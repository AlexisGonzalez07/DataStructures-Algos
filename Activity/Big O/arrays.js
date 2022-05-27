// There is order in arrays, and that's the selling point for arrays
// Great for order
// Good in different cases when you need access/ insertion and removal
// Big O of insertion and removal depends on the problem
// If you insert at the end, then you just push and O(1) is the complexity;
// But if you insert at the start, you change the index for all items in the array, therefore complexity is O(n)
// You can follow the same logic for deleting at end or beginning
// Big O of access if O(1) given the right index of the array
// Big O of searching is O(n) and will scale based on length of array

// What are all the array methods
// List under O(1) : push, pop, 
// List under O(n): shift, unshift, concat, slice, splice, forEach/map/filter/reduce
// List under O(n*log n): sort