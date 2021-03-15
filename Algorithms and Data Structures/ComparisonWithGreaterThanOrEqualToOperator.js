// >=
//compares values of two numbers
//if number to left is greater than or equal to the number to the right it returns true, otherwise false

function testGreaterOrEqual(val) {
    if (val >= 20) {  
      return "20 or Over";
    }
  
    if (val >= 10) {  
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);