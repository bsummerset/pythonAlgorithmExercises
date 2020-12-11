// Write a function that returns the greatest common divisor of two given numbers. For example,

function greatest_divisor(n, m) {

    let x = (n > m) ? m : n

    while (x > 0) {
        if ((m % x) === 0 && ((n % x) === 0)) {
            break
        }
        else {
            x --
        }

    }

    return x
}

console.log(greatest_divisor(12, 120)) // = 12
console.log(greatest_divisor(12, 121)) // = ??
console.log(greatest_divisor(121, 12)) // = ??
console.log(greatest_divisor(-120, -11)) // = ??
