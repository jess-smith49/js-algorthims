//check if property of a given object exists or not
// .hasOwnProperty(propname)
//returns true or false

var myObj = {
    top: "hat",
    bottom: "pants"
  };
  myObj.hasOwnProperty("top");
  myObj.hasOwnProperty("middle");


//example
function checkObj(obj, checkProp) {
 
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    } else {
         return "Not Found";
    }
   
   }