$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var zombies = parseInt($('#zombies').val());
      var distance = parseInt($('#distance').val());
      var shots = parseInt($('#shots').val());
      var misses = 0;

      while(shots >0 && distance>0 && zombies>0){
        if(Math.floor(Math.random()*100)!=5){
          zombies--; distance-=.5; shots--;
        }
        else{
          distance-=.5; shots--; misses++;
        }
      }
      if(zombies==0)
        $('#ans').text('All Zombies elliminated with Distance: ' + distance+', Shots remaining: '+shots+', and '+misses+' misses!');
      else
        $('#ans').text('You lost with zombies '+ zombies +', Distance: ' + distance+', Shots remaining: '+shots+', and '+misses+' misses!');

  });
});
