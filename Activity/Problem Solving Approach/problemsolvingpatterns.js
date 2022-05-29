// Devise a plan for solving problems
// Master common problem solving patterns0

// Frequency Counters
    // Pattern uses objects of sets to collect values/frequencies of values
    // This can often avoid the need for lested loops or O(n^2) operations with arrays/strings

    // write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same

// same([1,2,3], [4,1,9]) should resolve true
// same([1,2,3], [4,9]) should resolve false
// same([1,2,1], [4,4,1]) should resolve false due to frequency

//Naive way

// const same = (arr1,arr2) => {
//     if (arr1.length !== arr2.length) return false
    
//     for( let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i]**2)
//         if(correctIndex === -1){
//             return false;
//         }
//         arr2.splice(correctIndex,1)
//     }
//     return true
// }


// same([1,2,3,2],[9,1,4,4])
// Refactor
const same = (arr1,arr2) => {
    // if (arr1.length !== arr2.length) return false
    let frequency1={};
    let frequency2={};
    for(let val of arr1){
        frequency1[val] = (frequency1[val] || 0) +1
        console.log(frequency1)
    }
    for (let val of arr2){
        frequency2[val] = (frequency2[val] || 0) +1
        // console.log(frequency2)
    }
    for (let key in frequency1){
        if(!(key**2 in frequency2)){
            return false
        }
        if(frequency2[key **2] !== frequency1[key]){
            return false
        }
    }
    console.log("Success")
    return true

}
same([5,1,2,3,3,3,3], [25,4,1,9,9,9,9])