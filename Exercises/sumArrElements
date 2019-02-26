// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    return (!input || !input.length) ? [] : [
    input.filter(n => n > 0).length,
    input.filter(n => n < 0).reduce((a, b) => a + b, 0)
  ]; 
}
