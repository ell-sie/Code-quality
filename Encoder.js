function solution(number) {
  // make an array that takes a number and its symbol
  const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  //intialize an empty string to take the symbol
  let result = "";
  for (const [symbol, value] of romanNumerals) {

    //calculate the number of times a symbol will occur
    const count = Math.floor(number / value);

    //repeat the symbol depending on its count
    result += symbol.repeat(count);
    
    // uptdate the number if there was any remainders eg:(13-(10-1)) = 3
    number -= value * count;
  }

  return result;
}
