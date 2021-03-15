/*
.pop() pops a value off of the end of an array
it can be stored by assigning it to a value

.pop() removes the last element from an array and returns that element
any type of entry can be popped off of an array
*/

var array = [1,2,3];
var removedFromArray = array.pop();

console.log(removedFromArray);
console.log(array);


//with nested arrays
var newArray = [["Jess", 23], ["John", 24]];
removedData = newArray.pop();