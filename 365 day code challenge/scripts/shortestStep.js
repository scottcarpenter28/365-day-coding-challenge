$(document).ready(function() {
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    step = 0;

    while(num != 1){
      if(num%2 ==0)num = num/2;
      else num--;
      step++;
    }
    $('#steps').text(step);
    });
});
