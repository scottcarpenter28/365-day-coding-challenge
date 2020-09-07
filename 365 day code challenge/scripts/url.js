$(document).ready(function() {
  $("#output").click(function() {
    var url = $('#url').val();
    url = url.substr((url.indexOf('//')+2));
    url = url.substr(0,url.indexOf('.'));
    $('#ans').text(url);
  });
});
