function squareSum(numbers){
// Return a new array with each number square of the initial array
 var x = numbers.map(function(z){
 return Math.pow(z,2)
 });
 // Then sum all the squared numbers
 return x.reduce(function(a,b){
   return a+b;
 },0);
}
