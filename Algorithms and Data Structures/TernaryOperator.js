//conditional operator
//used as a one line if-else expression

//syntax is a ? b:c
//where a is the condition, b is the code to run when true, and c is run when false
function findGreater(a, b) {
    if(a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
  }

  //rewritten
  function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater";
  }

  //example
  function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
  }
  
  checkEqual(1, 2);


  //Using multiple conditional ternary operators
  function findGreaterOrEqual(a, b) {
    if (a === b) {
      return "a and b are equal";
    }
    else if (a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
  }

  //rewritten
  function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
  }

  //reformatted
  function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
  }

  //example
  function checkSign(num) {
    return (num > 0) ? "positive" :(num < 0) ? "negative" : "zero"
  }
  
  checkSign(10);
