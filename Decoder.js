function solution (roman) {
    // Define an object to map Roman numeral symbols to their corresponding values.
    const romanNumerals = {
      "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000
    };
  
    let result = 0;
    let prevValue = 0; 
  
    // Iterating from right to left.
    for (let i = roman.length - 1; i >= 0; i--) {
      const currentSymbol = roman[i];
      const currentValue = romanNumerals[currentSymbol];
  
      // Checking for subtractive numerals.
      if (currentValue < prevValue) {
        result -= currentValue; // Subtract the current value.
      } else {
        result += currentValue; // Add the current value.
      }
  
      prevValue = currentValue; // Updating the previous value for the next iteration.
    }
  
    return result;
  }