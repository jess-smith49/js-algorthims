//recursion is the concept that a function can be expressed in terms of itself

function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

  function sum(arr, n) {
    if(n <=0){
      return 0;
    }else{
      return sum(arr, n - 1) + arr[n - 1]
    }
  }

  //examples

  var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
for( var i = 0; i < contacts.length; i++){
    for (var x =0; x<contacts.length; x++){
        if (contacts[x]["firstName"] === name){
            if (contacts[x].hasOwnProperty(prop)){
                return contacts[x][prop];
            } else {
            return "No such property";
            }
        }
    
  }
    return "No such contact";
    
    }
}
lookUpProfile("Akira", "likes");