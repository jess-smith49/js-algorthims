//two ways to access properties of an object
//dot notation and bracket notation


//dot notation is what you use when you know the name of the property you are trying to access

var myObj = {
    prop1: "val1",
    prop2: "val2"
  };
  var prop1val = myObj.prop1;
  var prop2val = myObj.prop2;

  var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  var hatValue = testObj.hat;      
  var shirtValue = testObj.shirt; 

  //bracket notation, if the property has a space in its name
  var myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
  };
  myObj["Space Name"];
  myObj['More Space'];
  myObj["NoSpace"];



  var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  var entreeValue = testObj["an entree"];   
  var drinkValue = testObj["the drink"]; 

  //accessing object properties with variables
  var dogs = {
    Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
  };
  var myDog = "Hunter";
  var myBreed = dogs[myDog];
  console.log(myBreed);


  var someObj = {
    propName: "John"
  };
  function propPrefix(str) {
    var s = "prop";
    return s + str;
  }
  var someProp = propPrefix("Name");
  console.log(someObj[someProp]);

  var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  var playerNumber = 16;      
  var player = testObj[playerNumber];  
