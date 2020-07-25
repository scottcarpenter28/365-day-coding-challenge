$(document).ready(function() {
  $("#output").click(function() {
    var p1 = $('#character1').val();
    var p2 = $('#character2').val();

    if(p1 === p2)
      $('#winner').text('Its a tie');
    else if((p1=='Archer'&& p2 !='Cavalry')||
            (p1=='Swordsman' && p2!='Archer')||
            (p1=='Pikemen' && p2=='Cavalry')||
            (p1=='Cavalry' && p2=='Archers'))
      $('#winner').text(p1+' Wins!')
    else
      $('#winner').text(p2+' Wins!')

  });
});
