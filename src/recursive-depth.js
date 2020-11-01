const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 0;
    function caunt(array) {
      for (var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            result += 1;
          }
        }
    }
    if (Array.isArray(arr)) {
    result += 1;
      caunt(arr)
      }

    return result;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};
