//scope refers to visibility of the variables
//variables defined outside of function block are GLOBAL variables

//variables used without the var keywords are automatically created in the global scope
//always declare variables with var


//example
var myGlobal = 10;

function fun1(){
    oopsGlobal = 5
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}