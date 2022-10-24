const add = function(numOne, numTwo) {
  let result = numOne + numTwo;
  return result;
	
};

const subtract = function(numOne, numTwo) {
  let result = numOne - numTwo;
	return result;
};

const sum = function(array) {
  let numArray = array;
  let result = 0;
  numArray.forEach(number => result += number);
	return Number(result);

};

const multiply = function(array) {
  let result = 1;
  array.forEach(number => result *= number);
  return result;

};

const power = function(numOne, numTwo) {
  const result = numOne ** numTwo;
  return result;
	
};

const factorial = function(number) {
  if (number == 0) {return 1};
  let result = number * (factorial(number - 1));
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
