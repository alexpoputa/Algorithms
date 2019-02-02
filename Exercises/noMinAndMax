// Sum the elements of an array without its min and max numbers value

function sumArray(array) {
  
  if (array == null || array.length <= 2) {
    return 0
  }
  
  var max = Math.max.apply(Math, array);
  var min = Math.min.apply(Math, array);
  var sum = 0
  
  for (i = 0; i < array.length; i++) {
    sum += array[i];
   }

  return sum - max - min;
}
