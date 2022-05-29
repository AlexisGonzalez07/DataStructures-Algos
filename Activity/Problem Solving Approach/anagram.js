// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. 

const validAnagram = (word1, word2) => {
    let answer = Boolean
    if(typeof word1 !== "string" || typeof word2 !=="string" || word1.length !== word1.length){
        answer = false
        console.log(answer)
        return answer
    }

    let counter1 ={};
    let counter2 ={};
    for(let letter of word1){
        counter1[letter]= (counter1[letter] || 0) +1
    }
    console.log(counter1)
    for(let letter of word2){
        counter2[letter]= (counter2[letter] || 0) +1
    }
    console.log(counter2)

    for(let key in counter1){
        if (!(counter1[key] && counter2[key]) || counter1[key] !== counter2[key]){
            answer = false
            console.log(answer)
            return answer
        }
    }
    // for(let key in counter2){
    //     if(!(counter1[key] && counter2[key])){
    //         answer=false
    //         console.log(answer)
    //         return answer
    //     }
    // }
    answer=true
    console.log(answer)
    return answer
}

validAnagram("iloveyou","youlovei")