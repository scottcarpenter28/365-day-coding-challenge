$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    var end = num.toString()
    var morphic = 0;

    for(var i = 2; i <= 10; i++){
      var sqrd = Math.pow(num, i);
      var sqrdEnd = sqrd.toString().substr(sqrd.toString().length-end.length)
      if(end == sqrdEnd)
        morphic+=1;
    }
    var result = ''
    if(morphic==9)
      result="Polymorphic";
    else if(morphic==4)
      result="Quadrimorphic";
    else if(morphic==2)
      result="Dimorphic"
    else if(morphic==1)
      result="Enamorphic"
    else
      result="Amorphic"
    $('#ans').text(result);
  });
});
