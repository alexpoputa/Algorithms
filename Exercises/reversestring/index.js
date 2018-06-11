// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

	return str
	.split('') // transforming the string to an array
	.reverse() // reversing the array 
	.join(''); // joining the array back to string
	
}

module.exports = reverse;

/* SOLUTION 2:
	
	var reversed = ""; // creating an empty string
	for (let character of str) { // itterating through all the characters of string
		reversed = character + reversed; // add each character to reversed string
	}
	return reversed;
*/


/* SOLUTION 3:

return str.split('').reduce((reversed, character) => {
		return character + reversed;
	}, ''); //reduce takes all values in an array and condense them down to a  single string value
*/

 