var _ = require('lodash');


// create shuffled array
let i = 1;
let sum = 0;
let arr = []

while (i <= 100){
    sum += i
    arr.push(i)
    i ++
}

let shuff = _.shuffle(arr)

// remove one element
let removed = shuff.pop()

// From an unsorted array of numbers 1 to 100 excluding one number, how would you find the missing number?

// If only one number is missing, we can solve the problem several ways.
// 1) We can compare the sum of all of the numbers to the complete sum of 1-100, then compute the difference.
// 2) We can create a loop of i from 1-100, then use a built-in function to locate the index of i or return i if not found

arrSum = 0;
shuff.forEach(el => {arrSum += el})

console.log(`Method 1:`)
console.log(`Total Sum: ${sum}`)
console.log(`Sum of Shuffled Array: ${arrSum}`)
console.log(`Removed Number: ${removed}`)
console.log(`Diff: ${sum - arrSum}`)

console.log(`Method 2:`)
for (let x = 1; x < 101; x++){
    if (shuff.includes(x)){

    } else {
        console.log(`The missing number is: ${x}`)
        break
    }
}
