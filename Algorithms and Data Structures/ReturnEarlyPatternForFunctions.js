//when a return statement is reached, the executions of the curreent function stop and control returns to the calling location

//this will display Hello World but not byebye
function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
  }
  myFun();

  //example
  function abTest(a, b) {
 
    if(a < 0 || b < 0){
      return;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);

  //example
  var count = 0;

function cc(card) {

   switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'
  }

  return count + " " + holdbet;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');