//objects are similar to arrays except instead of indexes to acess and modify their data, you can access data in objectes through their properties
//useful for storing data in structured ways

var cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
  };

  //can also have single word string properties
  var anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
  };

  //if your object has any non-string properties, JS will automatically typecast them as strings

  var myDog = {
    name: "Buddy",
    legs: 4,
    tails: 1,
    friends: ["Lucy", "Simba"]
  };
