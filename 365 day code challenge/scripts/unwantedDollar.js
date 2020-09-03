$(document).ready(function() {
  $("#output").click(function() {
    var regex = /-{0,1}\d*\.\d\d/;
    var test = $('#price').val().match(regex);
    if(test===null)
      test = "0.0";
    $('#ans').text(test);
  });
});
