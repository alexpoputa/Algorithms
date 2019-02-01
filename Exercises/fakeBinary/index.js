function fakeBin(x){
  // Make a new string to store the result
  var str = '';
  for(var i=0;i<x.length;i++){
  if(x[i] >= 5){
  // Add 1 to the new string for each element in the initial string that is equal or higher than 5
    str += '1';
  }else{
  // Add 0 to the new string for each element in the initial string that is lower than 5
    str += '0';
  }
  }
  return str;
}
