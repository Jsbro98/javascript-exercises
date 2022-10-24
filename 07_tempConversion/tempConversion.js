const ftoc = function(number) {
  let math = (number - 32) * (5/9);
  let result = Math.round(math *10) / 10;
  return result;
};

const ctof = function(number) {
  let math = (number * (9/5) + 32);
  let result = Math.round(math * 10) / 10;
  return result;
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
