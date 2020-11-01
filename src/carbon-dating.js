const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const lambda = 0.693;
  if(arguments.length == 0 || sampleActivity == null || isNaN(sampleActivity)){
    return false;
  }else {
    let value = Number(sampleActivity);
    return Math.ceil(HALF_LIFE_PERIOD/MODERN_ACTIVITY*lambda*value);
  }
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
