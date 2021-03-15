//compares values of two numbers
//if number to left is greater than number to right it returns true, otherwise returns false
// >

function testGreaterThan(val) {
    if (val > 100) {  
      return "Over 100";
    }
  
    if (val > 10) {  
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);