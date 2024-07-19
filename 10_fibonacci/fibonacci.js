const fibonacci = function(value) {
    let num1 = 0;
    let num2 = 1;
    if (value == 1){
        return num2;
    }
    else if (value == 0){
        return num1;
    }
    else if (value == 2){
        return num2;
    }
    else if (value < 0){
        return "OOPS"
    }
    else {
        for (let i = 2; i <= value; i++){
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
};


// Do not edit below this line
module.exports = fibonacci;
