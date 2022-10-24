const sumAll = function(numberOne, numberTwo) {
    let userNumberOne = numberOne;
    let userNumberTwo = numberTwo;
    if(((numberOne || numberTwo) < 0) || (typeof(numberOne, numberTwo) != 'number')) {return 'ERROR'}

    if (userNumberOne < userNumberTwo) {

        for (i = userNumberOne + 1; i < userNumberTwo; i++) {
            let nextAddNumber = i;
            userNumberOne += nextAddNumber;
        }
    } else {
        userNumberTwo = numberOne;
        userNumberOne = numberTwo;
        for (i = userNumberOne + 1; i < userNumberTwo; i++) {
            let nextAddNumber = i;
            userNumberOne += nextAddNumber;
        }
    }
    let result = userNumberOne + userNumberTwo;
    console.log(result);
    return result;
};
// Do not edit below this line
module.exports = sumAll;
