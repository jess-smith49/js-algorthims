//testing more than one thing at a time
//&& returns true if nd only if the operands to the left and right of it are true

//same effect with nested if statements 

function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val>=25) {
      return "Yes"
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);