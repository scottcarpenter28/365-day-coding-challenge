$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    $('#ans').text(toBinary(num));
  });
});

function toBinary(num){
  var binarySum = 0;
  var exp = 15;
  var bin = ''

  while(exp >= 0){
    var addition = Math.pow(2,exp);

    if(addition + binarySum <= num){
      binarySum += addition;
      bin += '1';
    }
    else
      bin += '0';
    exp-=1;
  }
  return oddBinary(bin);
}

function oddBinary(bin){
  console.log(bin);
  for(var i = 0; i < bin.length; i++){
    if(bin.charAt(i) == 1 && i%2 == 0)
    return true;
  }
  return false;
}
