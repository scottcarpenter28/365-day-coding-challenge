$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num = Math.abs(parseInt($('#num').val()));
    $("#ans").text(smallestNum(num));
  });
});

function smallestNum(num){
  var sqr = Math.ceil(num/2);
  var max = Math.pow(num, sqr);
  for(var i=num; i <= max; i++){
    if(divisibleByAll(num,i))
      return i;
  }
  return -1;
}

function divisibleByAll(num, i){
  if(num == 1)
    return true;
  else if(num !=1 && i%num !=0 )
    return false;
  else
    return divisibleByAll(num-1,i);
}
