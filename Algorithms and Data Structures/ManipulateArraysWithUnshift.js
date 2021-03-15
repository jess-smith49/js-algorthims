/**
 .unshift() works like .push() but instead adds it to the front of the 
 array rather than the end of the array
 */

 var array = [["Jessica", 23], ["John", 24], ["Stacy", 40]];
 array.shift();
 array.unshift(["Mary", 26]);

 console.log(array);