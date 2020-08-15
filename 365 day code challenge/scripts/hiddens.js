$(document).ready(function() {
  $("#output").click(function() {
    var u = parseInt($('#u0').val());
    var res = (6*u*(u+1))-(5*u*(u+2))+((u+1)*(u+2));
    $('#ans').text(res);
  });
});
