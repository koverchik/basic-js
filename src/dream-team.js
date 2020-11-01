const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if(array == null){
  return false;
    }else {
      let newArrayTeam = [];
      for (var i = 0; i < array.length; i++) {
        if((typeof array[i] == "string") && (array[i].toString().trim()[0].search(/[A-Za-z]/) == 0)){
          newArrayTeam.push(array[i].toString().trim()[0].toUpperCase());
        }
      }

      if (newArrayTeam.length == 0 ){
        return false;
      };
      return  newArrayTeam.sort().join('');

    }


  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
