//math.random cannot return a 1
//math.floor can round the value down to the nearest whole number

Math.floor(Math.random() * 20);

function randomWholeNum() {
    return Math.floor(Math.random()* 10);
  }

//generate random whole numbers within a range
// a whole number tha falls within two specific numbers
//define a max and a min

Math.floor(Math.random() * (max - min + 1)) + min

//example

function randomRange(myMin, myMax) {
  
    return Math.floor(Math.random()* (myMax - myMin + 1) + myMin);
    
  }
