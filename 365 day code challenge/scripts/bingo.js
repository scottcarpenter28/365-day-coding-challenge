$(document).ready(function() {
  $("#output").click(function() {
    var bingoNums = $('#bingoNums').val().split(" ");
    var winner = ['2', '9', '14', '7', '15'];

    if(bingoNums.length != 10)
      $('#ans').text("Must have 10 numbers.")
    else{
      var i = 0;
      while(bingoNums.includes(winner[i]) && i<winner.length)
        i++;

      if(i == winner.length)
        $('#ans').text("Winner");
      else $('#ans').text('Loser');
    }

  });
});
