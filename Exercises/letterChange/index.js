// CHANGE EACH LETTER OF A STRING TO THE NEXT OF IT FROM THE ALPHABET
//"aBc" will become "bCd"

function LetterChanges(str) { 
  let inMap = 'abcdefghijklmnopqrstuvwxyz',
      outMap = 'bcdEfghIjklmnOpqrstUvwxyzA',
      out = '';

  for(let i=0; i<str.length;i++){
      let idx = inMap.indexOf(str[i]);
      if(idx >= 0){
          out = out + outMap[idx];
      }else {
          out = out + str[i];
      }
  }
  return out; 
}
   
// keep this function call here 
LetterChanges(readline());
