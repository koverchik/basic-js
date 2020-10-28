const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(data) {

 if(arguments.length == 0 || data == null){
    return 'Unable to determine the time of year!';
  }else {
    if(data.getMonth()>=2 && data.getMonth()<=4 ){return "spring"};
    if(data.getMonth()>=5 && data.getMonth()<=7 ){return "summer"};
    if(data.getMonth()>=8 && data.getMonth()<=10 ){return "autumn"};
    if(data.getMonth() ==0 || data.getMonth() == 1 ||data.getMonth() ==11  ){return "winter"};
  }


  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
