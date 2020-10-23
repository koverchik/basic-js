const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let a = 0;
  for (var i = 0; i < arr.length; i++) {
  let result =  arr[i].includes('^^');
    if(result === true){
      a = a + 1;
    }
  }
  return a;
  throw new CustomError('Not implemented');
  // remove line with error and write your code here

};
