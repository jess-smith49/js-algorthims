//variables declared within a function as well as function parameters have LOCAL scope
//they are only visible within that function

function myLocalScope() {
    var myVar = "hi"
    console.log(myVar);
}