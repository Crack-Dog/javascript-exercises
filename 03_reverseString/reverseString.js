const reverseString = function(string) {
    let reverseString = "";
    const splitArray = string.split("");
    splitArray.reverse();

    for (i = 0; i < splitArray.length; i++){
        reverseString += splitArray[i]
    }
    return reverseString
};

// Do not edit below this line
module.exports = reverseString;
