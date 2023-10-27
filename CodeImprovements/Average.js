function calculateAverage(numbers) {
    const sum = numbers.reduce((a,b)=>{return a + b},0)
    return sum / numbers.length
  }