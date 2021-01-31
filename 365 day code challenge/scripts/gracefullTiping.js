$(document).ready(function() {
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    if(num < 1)
      $('#ans').text("Number must be greater than 0");
    else
      $('#ans').text(gracefullTip(num));
  });
});


function gracefullTip(num){
  num = getTip(num);
  if(num <10)
    return num;
  else if(num < 100)
    return roundTo(num, 5);
  else if(num < 1000)
    return roundTo(num, 50);
  else
    return roundTo(num, 500);
}

function getTip(num){
  var tip = num*.15;
  tip += num;
  return Math.ceil(tip);
}

function roundTo(num, rnd){
  var mod = (num % rnd);
  rnd -= mod;
  num = num + rnd;
  return num;
}
