// write a function that calculates sum of numbers from 1 up to n
// Notation would be O(n)
const addUpTo = (n)=> {
    let total = 0
    for(let i=0; i<+n; i++){
        total += n
    }
    return total
}

// Big O is used to compare complexity between algorithms solving the same problem
// Big O(n) is linear search. It has a time complexity of Big O of n
// Each step in an algorithm has its own space and time complexity
// Allows us to talk formally about how the runtime of an algorithm grows as the input grows. We only care about the broad trends
// Constants don't matter when determining big n notation = constant runtime
// O(n) is preferred over O(2n)
// Constants being added to n like O(n^2 +5n +8) don't matter. The big picture is O(n^2)
// Arithmetic operations are constant; variable assignment is constant; Accessing elements in an array by index or object key is constant; in a loop, the complexity of the loop times the complexity of whatever happens inside of the loop

// logarithms are the inverse of exponentiation
// So log2(8)=3 is the same as 2^3=8. so we omit the 2 unless it's 10 or e as the base
// The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one


