$(document).ready(function() {
  $("#output").click(function() {
      var deck = $("#cards").val().split(' ');
      if(deck.length%2!=0)
        $('#shuffle').text('Must be an even amount of cards');
      else{
        $("#shuffle").text(faroShuffle(deck));
      }
    });
});

function faroShuffle(deck){
  var top =[];
  var bot =[];

  for(var i=0; i<deck.length; i++){
    if(i <(deck.length/2))top.push(deck[i]);
    else bot.push(deck[i]);
  }

  var sort =[];
  for(var i=0; i< deck.length; i++){
    if(i==0)sort.push(top.shift());
    else if(i == deck.length-1)sort.push(deck[deck.length-1]);
    else if(i%2 ==1)sort.push(bot.shift());
    else sort.push(top.shift());
  }
  return sort.join(' ');
}
