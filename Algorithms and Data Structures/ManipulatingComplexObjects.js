//sometimes data needs to be stores in a flexible data structure
//allow for arbitrary combinations of strings, numbers, booleans, arrays and functions

var ourMusic = [
    {
      "artist": "Daft Punk",
      "title": "Homework",
      "release_year": 1997,
      "formats": [ 
        "CD", 
        "Cassette", 
        "LP"
      ],
      "gold": true
    }
  ];

  //objects hold data in arrays that have a key-vaalue format
  //JSON = javascript object notation
  //its a related data interchange format used to store data

  var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
   
  ];

  //pushing
   myMusic.push(
      {
        "artist": "john",
        "title": "Blue",
        "release_year": 2020,
        "formats": [
          "CD",
          "LP"
        ]
      }
    )