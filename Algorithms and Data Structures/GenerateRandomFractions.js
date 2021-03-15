//random numbers are useful for creating random behaviors

//Math.random() function generates a random decimal number between 0 (nclusive) and not quite up to 1 (exclusive)
//It can return a 0 but never quite return a 1

//all function calls will be resolved before the return executes so we can return the value of the Math.random( ) function

function randomFraction() {

    var number = Math.random(1);
    return number;
  
  }