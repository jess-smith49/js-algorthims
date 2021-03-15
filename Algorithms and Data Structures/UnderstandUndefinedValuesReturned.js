//a function can include the return statement but it does not have to
//in a case where the function doesn't have a return statemnet when you cal it, the function processes the innter code bue the value returned is undefined

var sum = 0;

function addSum(num) {
    sum = sum + num;
}

addSum(4);
console.log(sum);

//this will return undefined because there is no return statement