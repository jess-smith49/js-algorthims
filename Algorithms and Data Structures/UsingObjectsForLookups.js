//key/value storage
//simiilar to a dictionary
//if you have tabular data you can use an object to lookup values rather tahn a switch statement or an if/else chain
//most useful whenyou know that your input data is limited to a certain range
var alpha = {
    1:"Z",
    2:"Y",
    3:"X",
    4:"W",
   
    24:"C",
    25:"B",
    26:"A"
  };
  alpha[2];
  alpha[24];
  
  var value = 2;
  alpha[value];

  //example
  function phoneticLookup(val) {
    var result = "";
  
    var lookup = {
      alpha: "Adams",
       
      bravo: "Boston",
      
      charlie: "Chicago",
       
      delta: "Denver",
       
      echo:"Easy",
        
      foxtrot:"Frank"
    }
  
    result = lookup[val]
   
    return result;
  }
  
  phoneticLookup("charlie");