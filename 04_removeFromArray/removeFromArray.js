const removeFromArray = function(array, ...input) {
    let arrayUserInput = array;
    let argsUserInput = input;

    for(i = 0; i < argsUserInput.length; i++) {
        let value = argsUserInput[i];
        let index = arrayUserInput.indexOf(value);
        if (index === -1) {continue} 
        arrayUserInput.splice(index, 1);
    }
    return arrayUserInput;
}
// Do not edit below this line
//module.exports = removeFromArray;
