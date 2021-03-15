//defining functions in javascript
function reusableFunction () {
    console.log("Hello World");
}
reusableFunction();

//passing values to functions with arguements
/*parameters are variables that act as placeholders for the values that are to
 be an input to a function when it is called

 when a function is defined it is typically defined along with one or more parameters, the actual values that are input or passed into a function
 when it is called are known as arguments
 */

 function example(param1, param2) {
     console.log(param1, param2)
 }

 example("Hello", "World")


 function functionWithArgs(param1, param2){
     console.log(param1 + param2);
 }

 functionWithArgs(1,3);