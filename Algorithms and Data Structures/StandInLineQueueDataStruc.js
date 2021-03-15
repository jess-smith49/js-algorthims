//a queue is an abstract data structure where items are kept in order
//new items can be added at the back of the queue and old items are taken off from  the front of the queue


function nextInLine (arr, item) {
    arr.push(item)
    return arr.shift();

    /*or
    arr.push(item)
    item = arr.shift()
    return item;*/
    
}

var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));