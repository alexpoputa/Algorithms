function isOpposite(s1,s2){
 // If s1 and s2 are empty strings or the length of them are not equal,return false;
 if( s1 == '' || s2 == '' || s1.length != s2.length ) return false;
  
  var res = '';
  for ( var index in s1 ) {
    if ( s1[index].toUpperCase() == s1[index] ) {
    // Transform each uppercase chars from first string to lowercase
    res += s1[index].toLowerCase();
    } else {
    // Else viceversa
    res += s1[index].toUpperCase();
    }
  }
 // If s2 == res, where res is the opposite of s1, return true, otherwise return false
  return s2 == res;
}

/* 
  isOpposite("ab","AB") should return true;
  isOpposite("aB","Ab") should return true;
  isOpposite("aBcd","AbCD") should return true;
  isOpposite("AB","Ab") should return false;
  isOpposite("","") should return false;
*/
