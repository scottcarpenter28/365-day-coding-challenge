$(document).ready(function() {
  $("#output").click(function() {
    $('#ans').text(Math.round(100*(parseInt($('#imposters').val())/parseInt($('#players').val())))+'%');
  });
});
