// Problem Solving Steps
// Understand the Problem:
    // Restate the problem in own words to ensure comprehension
    // What are the inputs and outputs for the problem
    // Will the outputs be determined from the inputs? Do I have all the information
    // How to label my important pieces of data that are part of the problem
// Explore Concrete Examples
    // Helps understand inputs and outputs that should work
    // User Stories are a matter of examples as well as Unit tests
    // Write down to simple exaples, progress to complex examples like empty or invalid inputs


    // Write a function which takes in a string and returns counts of each character in the string
    // charCount("aaaa"); //{a:4}
    // charCount("hello") //{h:1,e:1,l:2,o:1}

// Break It Down
    // Take the time to explicitly write out the steps you need to take
// function charCount(str){
    // make the object to return at end
    // loop over string, for each character...
        // if char is a number/letter AND key in object, add one to count
        // if char is a number/letter AND not in object, add and set value to 1
        // if char is something else (space, period, etc) don't do anything
    // return an object with keys that are all lowercase
// }


// Solve/Simplify
    // Solve the problem and if you can't solve a simpler problem
// const charCount = (str) => {
//     let countObject= {}
//     let base = str.toLowerCase()
//     console.log(base)
//     for (let i=0; i<base.length; i++){
//         var char = base[i]
//         if (isAlphanumeric(char) && countObject[char]>0){
//             countObject[char]++
//         } else if (isAlphanumeric(char) && countObject[char] == null) {
//             countObject[char] = 1
//         }
//     }
//     console.log(countObject)
//     return countObject
// }

// Refactor the solution
const charCount = (str) => {
    let countObject = {}
    for (var letter of str){
        if(isAlphanumeric(letter)){
            let char=letter.toLowerCase();
            countObject[char] = ++countObject[char] || 1
        }
    }
    console.log(countObject)
    return countObject
}



const isAlphanumeric = (character) => {
    var regex = /^[A-za-z0-9]$/
    if (!character.match(regex)){
        return false
    }
    return true
}


charCount("Hello!!!")

// Look Back and Refactor
    // Can you check the result
    // Can you derive the result differently
    // Can you understand it at a glance?
    // Can you use the result or method for another problem?
    // Can you improve the performance of your solution?