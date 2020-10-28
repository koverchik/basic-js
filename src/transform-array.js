const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArray = [];

  if(Array.isArray(arr)){
    for (var i = 0; i < arr.length; i++) {

        if(arr[i] == "--discard-next"){
          continue;
        }else if(arr[i-1] == "--discard-next"){
          continue;
          } else if(arr[i] == "--discard-prev" && arr[i-1] != "undefined"){
          newArray.pop();}else if(arr[i] == "--double-next"  && arr[i+1] != "undefined"){
            newArray.push(arr[i+1]);newArray.push(arr[i+1]);}else if(arr[i] == "--double-prev" && arr[i-1] != "undefined"){
              newArray.push(arr[i-1]);}else {
                      newArray.push(arr[i]);
                      }
                    }
    return newArray;
  }else {
    throw new Error();
  }
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
