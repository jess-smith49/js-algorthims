//everything to the right of the equal sign is resolved before the value is assigned
//we can take the return value of a funcion and assign it to a variable

var processed = 0;

function processArg(num) {
    return(num + 3)/ 5;
}

//assigned to new variables
processed = processArg(7);
console.log(processed);