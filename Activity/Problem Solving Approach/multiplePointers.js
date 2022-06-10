// Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative numebrs in the arrya, but it will always be sorted. 

const countUniqueValues=(arr) => {
    let counter = {}
    for(val of arr){
        counter[val] = (counter[val]||0) +1
        console.log(counter)
    }
    console.log(Object.keys(counter).length)
    return Object.keys(counter).length
}

countUniqueValues([1,2,3,4,4,4,4])

