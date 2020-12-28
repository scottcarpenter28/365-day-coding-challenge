$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var n = parseInt($('#num').val());
      $('#ans').text(n>0? ((3*Math.pow(n,2))-n+2)/2: 'N must be greater than 0');
  });
});
