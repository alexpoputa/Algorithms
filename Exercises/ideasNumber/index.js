/*For every good kata idea there seem to be quite a few bad ones!
In this exercise you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
If there are no good ideas, as is often the case, return 'Fail!'.*/

function well(x){
 var good = 0;
 var bad = 0;
  for(var i=0;i<x.length;i++){
    if(x[i] == "good") good++;
    else if(x[i] == "bad") bad++;
  }
  return good == 1 || good == 2 ? "Publish!" : good < 1 ? "Fail!" : "I smell a series!"; 
}
