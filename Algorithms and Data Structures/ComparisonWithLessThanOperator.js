//less than < compares values of two numbers
//if number to left is less than number to right it returns true, otherwise fale

function testLessThan(val) {
    if (val < 25) {  
      return "Under 25";
    }
  
    if (val < 55) {  
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);