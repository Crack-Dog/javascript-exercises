const palindromes = function (string) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let newString = string.toLowerCase().split("").filter((character) => alphanumerical.includes(character)).join("");
    let reverseString = newString.split("").reverse().join("");

    if (newString === reverseString){
        return true
    }
    return false
};


// Do not edit below this line
module.exports = palindromes;
