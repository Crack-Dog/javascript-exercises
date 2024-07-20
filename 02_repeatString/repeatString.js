const repeatString = function(string, num) {
    
    if (num < 0){
        return "ERROR";
    }
    
    let newString = ""
    if (num > 0){
        for (let i = 0; i < num; i++){
            newString += string;
        }
    }
    return newString;
};

repeatString("bob", -1);

// Do not edit below this line
module.exports = repeatString;
