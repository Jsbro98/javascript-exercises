const palindromes = function (string) {

    // functions used in compareStrings
    function hasPunct() {
        let lastChar = string.charAt(string.length - 1);
        if (lastChar == "!" || lastChar == "?" || lastChar == ".") {
            return true;
        };
        return false
    };

    function trimString() {
        let userString = string.toLowerCase().replace(/\s/g, "");

        for (i = 0; i < string.length; i++) {
            const stringCharacter = string.charAt(i);
            if (stringCharacter === ",") {
                userString = userString.replace(stringCharacter, "");
            }
        }
        return userString;
    };

    function reverseString() {
        const userString = trimString();
        const stringArray = [...userString];
        if (hasPunct() == true) {
            const punct = stringArray[stringArray.length - 1];
           stringArray.pop(); 
           const reversed = stringArray.reverse();
           reversed.push(punct);
           const result = reversed.join("");
           return result;
        } else {
            const reversed = stringArray.reverse();
            const result = reversed.join("");
            return result;
        };
    };
    
    // main function for comparison
    function compareStrings() {
        const originalString = trimString();
        const newString = reverseString();
        if (originalString === newString) {
            return true;
        }
        return false;

    };

if (compareStrings() === true) {
        return true;
    };
return false;
};

// Do not edit below this line
module.exports = palindromes;
