/*
Write a function, gooseFilter/goose_filter/GooseFilter, that takes an array of strings 
as an argument and returns a filtered array containing the same elements but with the 'geese' removed.
*/

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
 // Return birds words if those words are not included in geese array
 return birds.filter(b => !geese.includes(b));
};
