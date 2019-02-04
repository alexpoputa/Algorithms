function removeExclamationMarks(s) {
   // Create a var that removes exclamation marks with regex
  var regex = /!/g;
   // Return a new string with those exclamation marks replaced
  return s.replace(regex, '');
}
