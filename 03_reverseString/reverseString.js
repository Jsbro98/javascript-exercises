const reverseString = function(text) {
    let reversed = ""
    while(text.length > 0) {
        reversed += text.substr(text.length - 1)
        text = text.substring(0, (text.length - 1))
    } return reversed;
};

reverseString("Hello")
// Do not edit below this line
module.exports = reverseString;