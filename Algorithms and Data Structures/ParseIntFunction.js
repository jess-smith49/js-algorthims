//the parseInt() function parses a sting and returns an integer
var a = parseInt("007");

//this function converts a string 007 to the integer 7
//if the first character in the string cant be converted then it returns NaN

function convertToInteger(str) {
    return parseInt(str);
  }
  
  convertToInteger("56");


//using with a radix
//it takes a second argument for the radix which specifies the base of the number in the string
//the radix can be an integer between 2 and 36
parseInt(string, radix);

var a = parseInt("11", 2);
//the radix says 11 is in the binary system or base 2, and the example converts the string 11 to integer 3

function convertToInteger(str) {
    return parseInt(str, 2)
  }
  
  convertToInteger("10011");