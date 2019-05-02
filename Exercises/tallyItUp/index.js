/* 
  I'm creating a scoreboard on my game website, but I want the score to be displayed as tally marks instead of Roman numerals. Write a function that translates the numeric score into tally marks.
My tally mark font uses the letters a, b, c, d, e to represent tally marks for 1, 2, 3, 4, 5, respectively. I want a space and line break (<br>) after each completed tally (5).
Assume that the score you receive will be an integer. This function should return an HTML string that I can insert into my website that represents the correct score.
*/

var scoreToTally = function(score){
   let str = '';
    for(let i = score; 0 < i; i -= 5) {
      if(i >= 5) str += 'e <br>';
      if(i === 4) str += 'd';
      if(i === 3) str += 'c';
      if(i === 2) str += 'b';
      if(i === 1) str += 'a';
    }
    return str;
}

/*
Test.assertEquals(scoreToTally(3),'c', "Should return 'c'");
Test.assertEquals(scoreToTally(10),'e <br>e <br>', "Should return 'e <br>e <br>'");
Test.assertEquals(scoreToTally(9),'e <br>d', "Should return 'e <br>d'");
*/
