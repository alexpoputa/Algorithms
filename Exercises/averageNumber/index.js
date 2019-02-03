function find_average(array) {
  var sum = 0;
  var avg = 0;
  sum = array.reduce(function(a,b){
    return a + b;
  })
  avg = sum / array.length;
  return avg;
}
