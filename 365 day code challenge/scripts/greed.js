var score;
var roll;
$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    score = 0;
    roll = [];
    for(var i=0; i<6; i++)
      roll.push(Math.floor(Math.random()*6)+1);
    scoreCheck();
    $('#score').text(roll.toString()+' Score: '+score);
  });
});

function scoreCheck(){
  for(var i=1; i<=6; i++){
    
    var c=0;
    for(var k=0; k<roll.length; k++){
      if(roll[k]===i)
        c++
    }

    if(c>=3 && i===1){
      score += 1000;
      c-=3;
    }
    if(c>=3 && i>=1){
      score += i*100;
      c-=3;
    }
    if(c>0 && i==1)
      score += (100*c);
    if(c>0 && i==5)
      score += (50*c);
  }
}
