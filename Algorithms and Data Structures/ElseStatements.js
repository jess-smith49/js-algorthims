//when condition for an if statment is true, the block of code is executed
//when false, the else statement is executed

function testElse(val) {
    var result = "";
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    else {
      result = "5 or Smaller";
    }
  
    return result;
  }
  
  testElse(4);

  //there can be chained if statmeents if multiple conditions need to ba ddressed
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }
    else {
      return "Between 5 and 10";
    }
    
  }
  
  testElseIf(7);


  //function is executed top to bottom so be mindful of which statement comes first
  function orderMyLogic(val) {
    if (val < 5) {
       return "Less than 5";
     }
     else if (val < 10) {
       return "Less than 10";
     }  else {
       return "Greater than or equal to 10";
     }
   }
   
   orderMyLogic(7);


   //more chaining examples
   function testSize(num) {
    if (num < 5){
      return "Tiny"
    }
    else if (num < 10){
      return "Small"
    }
    else if (num < 15) {
      return "Medium"
    }
    else if (num < 20) {
      return "Large"
    }
    else if(num >= 20){
      return "Huge"
    }
  
   return "Change Me";
    // Only change code above this line
  }
  
  testSize(7);

  //more examples
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  
    if (strokes === 1){
    return names[0];
    }
    else if (strokes <= par - 2){
    return names[1];
    }
    else if (strokes === par - 1){
    return names[2];
    }
    else if (strokes == par){
    return names[3];
    }
    else if (strokes == par + 1){
    return names[4];
    }
    else if (strokes == par + 2){
    return names[5];
    }
    else if (strokes >= par + 3){
    return names[6];
    }
    else{
        return "Change Me";
    }

}

golfScore(5, 4);