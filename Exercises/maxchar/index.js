// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const objMap = {};
	let max = 0;
	let maxChar = ''; 

	for (let char of str) {
		if (objMap[char]) { // if we already have an object that it was repeated,  then increment
			objMap[char]++;
		} else { // else set it to 1
			objMap[char] = 1;
		}
	}

	for (let char in objMap) { // itterate through the object
		if (objMap[char] > max) { 
			max = objMap[char];
			maxChar = char;
		}
	}
	return maxChar;
}

module.exports = maxChar;
