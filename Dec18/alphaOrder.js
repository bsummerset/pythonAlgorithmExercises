// 2. Write a javaScript function that returns a passed string(one word) with letters in alphabetical order.
// Assume NO punctuation, NO spaces, and NO symbols are used in the string!
// i.e. "awesome" becomes "aeemosw"

// const { strictLeft } = require("sequelize/types/lib/operators");

function Alpha(str) {
    return str.split("").sort().join("");

}

console.log(Alpha("awesome"));