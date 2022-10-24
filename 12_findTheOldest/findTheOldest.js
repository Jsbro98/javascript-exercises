const findTheOldest = function(array) {
    const sorted = array.sort((a, b) => {
        let first = a.yearOfDeath - a.yearOfBirth;
        let next = b.yearOfDeath - b.yearOfBirth;
        if (isNaN(first)) {
            const date = new Date().getFullYear();
            first = date - a.yearOfBirth;
        }
        if (isNaN(next)) {
            const date = new Date().getFullYear();
            next = date - b.yearOfBirth;
        };
        return first > next ? -1 : 1;
    })
    const result = sorted[0];
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
