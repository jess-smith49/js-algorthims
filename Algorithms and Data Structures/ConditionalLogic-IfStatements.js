//if statements are used to make decisions in code
//if tells js to execute the code under certain conditions
//these conditions are boolean conditions and  can only be true or false
//when condition evaluates to true the program executes the statment inside the curly brackets
//when conditione evaluates to false the statement will not execute

/*
if(condition is true){
    statement is executed
}
*/

function test(myCondition) {
    if(myCondition){
        return "it was true";
    }
    
    return "it was false";
}

test(true);
test(false);