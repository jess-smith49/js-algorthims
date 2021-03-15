//strict equalty operator will compare botht eh data type and value as is without conversion

function compareEquality(a, b) {
    //if a === b
    if (10 === "10") { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");