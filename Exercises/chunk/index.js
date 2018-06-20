// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	const chunked = []; // create an empty array to hold chunks

	for (let element of array) { // itterate through 'unchunked' array
		const last = chunked[chunked.length - 1]; // retrieve the last element in 'chunked' array
	
	if (!last || last.length === size) { // if the last element does not exist , or its length is equal to chunk size
		chunked.push([element]); // then we want to add a new 'chunk' to 'chunked' with the current element
		 } else {
		 	last.push(element); // otherwise add the current element into the 'chunk'
		 }
	}


	return chunked;
}

module.exports = chunk;
