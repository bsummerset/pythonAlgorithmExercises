var _ = require('lodash');
// From an unsorted array of numbers 1 to 100 excluding one number, how would you find the missing number?

let i = 1;
let sum = 0;
let arr = []

while (i <= 100){
    sum += i
    arr.push(i)
    i ++
}

let shuff = _.shuffle(arr)
removed = shuff.pop()

arrSum = 0;

shuff.forEach(el => {arrSum += el})

console.log(`Total Sum: ${sum}`)
console.log(`Sum of Shuffled Array: ${arrSum}`)
console.log(`Removed Number: ${removed}`)
console.log(`Diff: ${sum - arrSum}`)
