$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var price = parseInt($('#price').val());
    var savings = parseInt($('#savings').val());
    var start = parseInt($('#start').val());
    if(price<1|| savings<1 || start<1)
      $('#ans').text("A non positive number was entered, please check input.")
    else
      $('#ans').text(calcDays(price, savings, start))
  });
});

function calcDays(price, savings, start){
  var days=0;
  for(var i=0; start+savings<price; i++){
    for(var k=1; k<=7; k++){
      start+=(i+k);
      days++;
    }
  }
  return days;
}
