//data type of Boolean
//will be one of two values: true or false
//basically little on-off switches 
//when true is on, false is off - vice versa
//these two states are mutually exclusive

function welcomeToBooleans() {
    return true;
}

//or

function booleans() {
    return false;
}


//sometimes people ue an if/else statement to do a comparison
//but since === returns true or false we can return the result of the comparison

function isLess(a, b) {
    return a < b
  }
  isLess(10, 15);