$(document).ready(function() {
  $("#output").click(function() {
    var numset =$('#numSet').val().split(', ').map(val => parseInt(val));
    var val = getDigit(numset).toString();
    console.log(val);
    $('#ans').text(val.charAt(val.length-1));
  });
});

function getDigit(numset){
  if(numset.length<=2)
    return Math.pow(numset.shift(), numset.shift());
  else
    return Math.pow(numset.shift(), getDigit(numset));
}
