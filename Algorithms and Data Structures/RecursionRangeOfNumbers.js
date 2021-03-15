//function return an array of integers which begins with a number represented by the startNum param
//ends with a number represented by the endNum param
//the startingnumber will always be less than or equal to the ending number

function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  };