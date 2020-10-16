var shift;
$(document).ready(function() {
  $("#output").click(function() {
    shift =parseInt($('#shift').val());
    if(shift<1)
      $('#ans').text("Shift value must be greater than 0.");
    else
      $('#ans').text($('#password').val().toUpperCase().split('').map(encode).reverse().join(''));
  });
});

function encode(val, num) {
  if(val.charCodeAt(0)>64 && val.charCodeAt(0)<91){
    var newCharCode = val.charCodeAt(0)+shift;
    if(newCharCode >90)
      newCharCode =65+(91-newCharCode);
    val= String.fromCharCode(newCharCode);
    if(num%2==0)
      return val;
    else
      return val.toLowerCase();
  }
  else if(val.charCodeAt(0)>47 && val.charCodeAt(0)<57)
    return 9-parseInt(val);
  else
    return val;
}
