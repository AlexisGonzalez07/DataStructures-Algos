// write a function that calculates sum of numbers from 1 up to n
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