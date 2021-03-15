//runs for specifc number of times
//declared with three optional expressions separated by semicolons

// for (a; b; c;)
// where a is initialization statement, be is condition, and c is final expression

var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

var myArray = [];

for( var i = 1; i < 6; i++){
  myArray.push(i)
}


//iterate odd numbers with for loop
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

var myArray = [];

for (var i = 1; i < 11; i+= 2){
  myArray.push(i)
}

//counting backwards with a for loop
var myArray = [];

for( var i = 9; i > 0; i -=2){
  myArray.push(i)
}

//iterate an array with a foor loop
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

//adding up total array values
var myArr = [ 2, 3, 4, 5, 6];
var total = 0

for(var i = 0; i < myArr.length; i ++){
  total += myArr[i]
}


//nesting for loops
var arr = [
    [1,2], [3,4], [5,6]
  ];
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }

  function multiplyAll(arr) {
    var product = 1;
    
    var total;
    for(var i = 0; i < arr.length; i++){
      for (var j = 0; j < arr[i].length; j++){
         product *= arr[i][j]
      }
    }
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);

