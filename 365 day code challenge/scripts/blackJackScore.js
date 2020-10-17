$(document).ready(function() {
  $("#output").click(function() {
    var score =0;
    var aces=0;

    var cards =$('#cards').val().toUpperCase().split(' ');
    for(var i=0; i<cards.length; i++){
      if(cards[i]=='A'){
        aces++;
        score+=10;
      }
      else if(cards[i] =='J' || cards[i] =='Q' || cards[i=='K'])
        score+=10;
      else
        score+=parseInt(cards[i]);
    }

    if(score>21 && aces>=1)
      score-=10;
    if(score>21)
      $('#ans').text('Busted '+ score)
    else
      $('#ans').text(score);
  });
});
