//strict equality (===) is the counterpart to (==)
//unlike the equality which attempts to convert both values being compared to a common type, the strict equality operator type does nto performa  type conversion

function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);