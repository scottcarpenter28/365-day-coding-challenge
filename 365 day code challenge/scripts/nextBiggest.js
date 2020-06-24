$(document).ready(function() {
  // Get value on button click and show alert
  $("#eq").click(function() {
    var num = $('#num').val();
    var ans = '';
    var n = true;
    if (num.length < 2) $('#ans').text('Must be at least 2 numbers');
    for (var i = parseInt(num) + 1; i <= Math.pow(10, num.length); i++) {
      n = true;

      for (var k = 0; k < i.toString().length; k++) {
        if (num.indexOf(i.toString().charAt(k)) == -1 ||
          i == parseInt(num) || !n)
          n = false;
      }

      n = test(num, i);

      if (n) {
        $('#ans').text(i + " is the next biggest number.");
        i = Number.MAX_VALUE;
      }
    }

     if($('#ans').val().endsWith("biggest number.") == -1)
      $('#ans').text('No next biggest');
  });
});

function test(num, i){
  for(var k=0; k<num.length; k++){
    if(i.toString().indexOf(num.charAt(k))==-1)return false;
  }
  return true;
}
