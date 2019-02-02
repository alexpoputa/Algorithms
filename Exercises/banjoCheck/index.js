// EXAMPLE 1

function areYouPlayingBanjo(name) {
  if (name.indexOf('R') == 0 || name.indexOf('r') == 0){
    return name + ' plays banjo';
  }else {
    return name + ' does not play banjo';
  }
}

// EXAMPLE 2

// function areYouPlayingBanjo(name) {
//   var arr = name.split('');
//   if(arr[0] == 'R' || arr[0] == 'r'){
//     return arr.join('') + ' plays banjo'; 
//   }else {
//     return arr.join('') + ' does not play banjo';
//   }
// }
