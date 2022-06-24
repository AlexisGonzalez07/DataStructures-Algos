// Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative numebrs in the arrya, but it will always be sorted.

const countUniqueValues = (arr) => {
  let counter = {};
  for (val of arr) {
    counter[val] = (counter[val] || 0) + 1;
    console.log(counter);
  }
  console.log(Object.keys(counter).length);
  return Object.keys(counter).length;
};

countUniqueValues([1, 2, 3, 4, 4, 4, 4]);

var twoSum = function (nums, target) {
  let j = 1;
  let i = 0;
  while (!(i >= nums.length - 2)) {
    if (nums[i] + nums[j] == target) {
      return [i, j];
    }
    if (j >= nums.length - 1) {
      i += 1;
      j = i + 1;
    } else if (!(j >= nums.length - 1)) {
      j++;
    } else {
      i++;
    }
  }
  return [i, j];
};

// while (!iIsDone(i,end)){
//     if (checkTarget(nums[i],nums[j],target)){
//         return [i,j]
//     }
//     if(jAtEnd(j,end)){
//         i+=1;
//         j=i+1
//     }
//     else if (!jAtEnd(j,end)){
//         j++
//     } else {
//         i++
//     }
// if (iIsDone(i,end)){
//      if (checkTarget(nums[i],nums[j],target)){
//             return [i,j]
//         }
//     return "no solution"
// }

// var checkTarget = (num1, num2, target) => {
//     return num1 + num2 == target
// }

// var jAtEnd= (j, end) => {
//     return j >= end
// }

// var iIsDone = (i, end) => {
//     return i>= (end-1)
// }

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //     we need a counter variable, start index, end index,
  //     originally, I think the start and end index =null, counter variable =0
  let counter = { sequence: 0 };
  let j = 1;
  let i = 0;
  let tempSequence;
// [a,b,c,a,b,c,b,b]

  while (i < s.length - 2) {
    if (s[i] !== s[j]) {
      (i == 0 && j==1) ? (tempSequence = j - i + 1) : (tempSequence = j - i);
      (i == 0) ? (tempSequence = j - i - 1) : (tempSequence = j - i);
      console.log(`tempSequence at i=${i} and j=${j} is ${tempSequence}`);
      if (checkCounter(tempSequence,counter)) {
        counter["sequence"] = tempSequence;
      }
      if (!(j >= s.length - 1)) {
        j++;
      } else if (j >= s.length - 1) {
        i += 1;
        j = i + 1;
        tempSequence = 0;
      }
    } else {
        (i == 0 && j==1) ? (tempSequence = j - i + 1) : (tempSequence = j - i);
        (i == 0) ? (tempSequence = j - i - 1) : (tempSequence = j - i);
      console.log(
        `tempSequence when equal at i=${i} and j=${j} is ${tempSequence}`
      );
      if (tempSequence > counter.sequence) {
        counter["sequence"] = tempSequence;
      }
      tempSequence=0;
      i+=1
      j=i+1
    }
    
  }

  return counter.sequence;
};

var checkCounter = (count, object) =>{
    if(count > object.sequence){
        return true
    }
}

console.log(lengthOfLongestSubstring("abcabcbb"));
