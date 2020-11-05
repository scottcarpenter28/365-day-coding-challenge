$(document).ready(function() {
  $("#output").click(function() {
    var num = $('#num').val().split('');
    var str = num.map(toLetter);
    $("#ans").text(str.join(''));
  });
});

function toLetter(n) {
  var letters = ['0','I','Z','E','H','S','G','L','B','-']
  for(var i =0; i<letters.length; i++){
    if(n==i)
      return letters[i];
  }
  return '';
}
