// 1. Write a function that accepts a string as a parameter and converts the first letter of each word to uppercase.
// (i.e. “the quick brown fox” becomes “The Quick Brown Fox”)
const str = "the quick brown fox";
function capitalize(str) {
    
    return str.charAt(0).toUpperCase() + str.slice(1);
    


}
const caps = str.split(' ').map(capitalize).join(' ');
console.log(caps);