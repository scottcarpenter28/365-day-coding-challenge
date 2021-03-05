$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var starting = parseInt($('#startPop').val());
    var percent = parseFloat($('#percent').val());
    var moving = parseInt($('#movingIn').val());
    var goal = parseInt($('#goal').val());

    if(starting < 0 || percent < 0 || moving < 0 || goal < 0)
      $('#ans').text('All numbers must be greater than 0');
    else{
      percent= percent/100;
      years = 0;
      while(starting < goal){
        years+=1;
        starting = starting + (starting*percent) + moving;
        starting = Math.floor(starting);
      }
      $('#ans').text(years);
    }
  });
});
