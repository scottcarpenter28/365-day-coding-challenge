$(document).ready(function() {
  $("#output").click(function() {
    var score=0;
    var str = $('#str').val().toUpperCase().split('').map(item =>(item.charCodeAt(0)-64>0 && item.charCodeAt(0)-64<=26) ? score+=item.charCodeAt(0)-64:score+=0);
    $('#ans').text(score);
  });
});
