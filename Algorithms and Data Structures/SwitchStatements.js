//many options to choose from
//tests a value and can have many case statements which define varous possible values
//statements are executed from teh first matched case value until a break is encountered

switch(lowercaseLetter) {
    case "a":
      console.log("A");
      break;
    case "b":
      console.log("B");
      break;
  }

  //case values are tested with strict equality (===). The break tells JS to stop executing statements
  //if break is omitted, the next statement will be executed

  function caseInSwitch(val) {
    var answer = "";
   
    switch(val){
      case 1:
        return answer = "alpha";
        break;
      case 2:
        return answer = "beta";
        break;
      case 3:
        return answer = "gamma"
        break;
      case 4:
        return answer = "delta"
        break;
    }
  
    return answer;
  }
  
  caseInSwitch(1);


  //if you cannot specify all values you can add a default statement which can be excuted if no matching case statements are found
  switch (num) {
    case value1:
      statement1;
      break;
    case value2:
      statement2;
      break;
    default:
      defaultStatement;
      break;
  }


  function switchOfStuff(val) {
    var answer = "";
   
   switch(val){
     case "a": 
     return answer = "apple"
     break;
     case "b":
     return answer = "bird"
     break;
     case "c":
     return answer ="cat"
     break;
     default:
      return answer = "stuff"
   }
    return answer;
  }
  
  switchOfStuff(1);


  //multiple identical options in switch statements
  var result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}


function sequentialSizes(val) {
    var answer = "";
    switch(val){
      case 1:
      case 2:
      case 3:
        return answer = "Low"
        break;
      case 4:
      case 5:
      case 6:
        return answer = "Mid"
        break;
      case 7:
      case 8:
      case 9:
        return answer = "High"
        break;
    }
    return answer;
  }
  
  sequentialSizes(1);

  //REPLACING IF ELSE STATEMENTS WITH SWITCH STATEMENTS
  if (val === 1) {
    answer = "a";
  } else if (val === 2) {
    answer = "b";
  } else {
    answer = "c";
  }
//   can be replaced with:
  
  switch(val) {
    case 1:
      answer = "a";
      break;
    case 2:
      answer = "b";
      break;
    default:
      answer = "c";
  }

  function chainToSwitch(val) {
    var answer = "";
    
    switch(val){
      case "bob":
        return answer = "Marley";
        break;
      case 42:
        return answer = "The Answer"
        break;
      case 1:
        return answer = "There is no #1"
        break;
      case 99:
        return answer = "Missed me by this much!";
        break;
      case 7:
        return answer = "Ate Nine";
        break;
    }
  
    return answer;
  }
  
  chainToSwitch(7);

