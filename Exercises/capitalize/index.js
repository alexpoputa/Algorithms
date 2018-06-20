// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	 const arr = [];

	 for (let word of str.split(' ')) { // for each word in string , after we splited it by spaces
	 	arr.push(word[0].toUpperCase() + word.slice(1)) // make first letter to uppercase and join the rest of the word to it and push after the whole word into the 'words' array
	 }
	 return arr.join(' '); // we're joining back the words from the array with a space character between them
}
	
module.exports = capitalize;
