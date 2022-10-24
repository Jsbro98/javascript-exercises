const repeatString = function(text, number) {
let finalString = ""

if(number < 0) {
    return "ERROR";
}

for (i = 0; i < number; i++) {
    finalString += text;
}
return finalString; 

};

//PASSED!!

// Do not edit below this line
module.exports = repeatString;