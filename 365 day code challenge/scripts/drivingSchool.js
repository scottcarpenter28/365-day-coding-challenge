$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var minutes = parseInt($('#mins').val());
    $('#ans').text(getCost(minutes));
  });
});

function getCost(minutes){
  if(minutes <= 5)
    return '$0.00';
  else if( minutes <= 60)
    return '$30.00';
  else{
    var cost = 30;
    minutes -= 60;
    while(minutes > 5){
      minutes -= 30;
      cost += 10;
    }
    return `$${cost}.00`;
  }
}
