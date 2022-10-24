const fibonacci = function(number) {
    const userNumber = Number(number);

    if (userNumber < 0) {return ("OOPS")};

    let resultArray = [];
    let firstNumber = 0;
    let secondNumber = 1;

    for (i = 0; i < userNumber - 1; i++) {
        let thirdNumber = firstNumber + secondNumber;
        if (resultArray.length == 0) {
            resultArray.push(1);
        };

        resultArray.push(thirdNumber);

        if (firstNumber == 0) {
            firstNumber = 1;
        };

        secondNumber = firstNumber;
        firstNumber = thirdNumber;
    };

    return resultArray[resultArray.length - 1];
};

fibonacci(10);
// Do not edit below this line
module.exports = fibonacci;
