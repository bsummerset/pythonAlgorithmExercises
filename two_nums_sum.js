var _ = require('lodash');

let arr1 = []
let arr2 = []
for (let i =1; i < 10; i++){
    arr1.push(i)
    arr2.push(10 - i)
}

let num = _.random(3)

for (let i = 0; i < num; i ++){
    arr1.pop()
    arr2.pop()
}

arr1 = _.shuffle(arr1)
arr2 = _.shuffle(arr2)

function arrTest(arr, s){

    let holder = new Set()
    let found = false

    arr.forEach((val) => {
        if (holder.has(s - val)){
            found = true
        } else {
            holder.add(val)
        }
    })

    let statement = (found) ? '' : 'not'
    console.log(`Array of: ${arr} and sum of ${s} was ${statement} found`)

    return found

}

arrTest(arr1, 6)
arrTest(arr2, 5)

