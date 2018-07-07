// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
	const midpoint = Math.floor((2*n - 1) / 2); // this is the midpoint,based on which we will add or remove spaces

	for (let row = 0; row < n; row++){ // itterate through rows
		let level = ''; // for each new row we create a string

		for (let column = 0; column < 2 * n - 1;column++){ // We itterate through columns and 2 * n-1 will give us the correct number of columns based on number of rows
			if (midpoint - row <= column && midpoint + row >= column){ // we make sure we're between the - and + , and add based on that  a '#' or a space
				level += '#';
			} else {
				level += ' ';
			}
		}
		console.log(level);
	}
}

module.exports = pyramid;
