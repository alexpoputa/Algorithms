// TRANSFORM THE FIRST LETTER OF EACH WORD TO UPPERCASE IN AN STRING

function LetterCapitalize(str) { 
  // Transform the string into an array
 var myArr = str.split(' ');
 // Create new empty array to store later the result
var store = [];
 // For each word in the first array
myArr.forEach(function(firstLetter){
    /* Take the first letter from initial array and change it to Upper Case 
       Then slice it and add the rest of the word to it, then push it to the new empty array */
store.push(firstLetter.slice(0,1).toUpperCase() + firstLetter.slice(1));
})
// Return the new array and join it back to a string
return store.join(' ') 
}
   
// keep this function call here 
LetterCapitalize(readline());   
