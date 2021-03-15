//multi-dimensional arrays are an array of arrays
//its a level structure

var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
];

//this will call the the third array
arr[3]; 
console.log(arr[3]); //or [[10, 11,12] 13, 14]

arr[3][0];
console.log(arr[3][0]); //or [10,11,12]

arr[3][0][1];
console.log(arr[3][0][1]); //or 11

