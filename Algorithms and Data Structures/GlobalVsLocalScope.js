//you can have local and global variables with the same name
//local with take precendence over the global

var someVar = "Blue";

function myFunction() {
    var someVar = "Red";
    return someVar;
}

//will return "Red" because local variable is present