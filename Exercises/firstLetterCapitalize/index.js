// TRANSFORM THE FIRST LETTER OF EACH WORD TO UPPERCASE IN AN STRING

function LetterCapitalize(str) { 
  // Transform the string into an array
 var myArr = str.split(' ');
 // Create new empty array to store later the result
var store = [];
 // for each word in first array
myArr.forEach(function(dataX){
    // Take the first letter from initial array,change it to Upper Case and add the rest of the word to it, then push it to the new empty array
store.push(dataX.slice(0,1).toUpperCase() + dataX.slice(1));
})
// Return the new array and join it back to a string
return store.join(' ') 
}
   
// keep this function call here 
LetterCapitalize(readline());   
