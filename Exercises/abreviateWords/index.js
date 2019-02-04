function abbrevName(name){
   var x = name
   // Split the words from string and join it to an array to loop
   .split(' ')
   // Loop throught each word in the array
   .map(a => 
   // Capitalize first letter of each word, add a dot after it and join it back to string
   a.charAt(0).toUpperCase() + ".").join('');
   // Return the string without the last element of it, which is a dot
   return x.slice(0,-1);
}
