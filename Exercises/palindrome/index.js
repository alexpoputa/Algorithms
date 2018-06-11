// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	if ((str.split('').reverse().join('')) === str) { // if the reversed string is equal with the initial string value , return true
		return true;
	}else { // if its not equal , return false
		return false;
	}
}

module.exports = palindrome;

/* SOLUTION 2:

return str.split('').every((char, i) => { // for each character starting from i , which is 0 (first element) , compared the first character with the last one
	return char === str[str.length -i -1]; // the last element itteration
});

*/