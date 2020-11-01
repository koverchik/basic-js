const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newStr = "";
    if(options.repeatTimes == undefined){newStr = str + options.addition};
  for (var i = 0; i < options.repeatTimes; i++) {
    newStr += str;
    for (var a = 0; a < options.additionRepeatTimes; a++) {
      newStr += options.addition;
      if(a < options.additionRepeatTimes-1){
          if(options.additionSeparator == undefined){
            newStr += "|";
          }else {
            newStr += options.additionSeparator;
          }
      }
    }
    if(i < options.repeatTimes -1){
      if(options.separator == undefined){
        newStr += "+"; }else {
          newStr += options.separator;
        }
    }
  }
  return newStr;

};
