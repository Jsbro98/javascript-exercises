const caesar = function(string, shift) {
    let result = "";
    const stringArray = [...string];

    for (i = 0; i < stringArray.length; i++) {
        let keyCode = stringArray[i].charCodeAt();
        let lowerCase = false;
        let upperCase = false;

        if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 122)) {continue};

        if (keyCode >= 65 && keyCode <= 90) {
            upperCase = true;
        } else {
            lowerCase = true;
        };

        keyCode += shift;

        if (upperCase && keyCode > 90 || upperCase && keyCode < 65) {
            while (keyCode < 65 || keyCode > 90) {
                if (keyCode > 90) {
                    keyCode -= 26;
                } else {
                    keyCode += 26;
                }
            }
        };

        if (lowerCase && keyCode < 97 || lowerCase && keyCode > 122) {
            while (keyCode < 97 || keyCode > 122) {
                if (keyCode > 122) {
                    keyCode -= 26;
                } else {
                    keyCode += 26;
                }
            }
        };

        stringArray[i] = String.fromCharCode(keyCode);
        
    }
    result = stringArray.join("");
    return result;
};

caesar('Z', 1);

// capitol letters: 65 - 90
// lower case letters: 97 - 122

// https://www.w3schools.com/charsets/ref_utf_basic_latin.asp -link to unicode codes

// Do not edit below this line
module.exports = caesar;
