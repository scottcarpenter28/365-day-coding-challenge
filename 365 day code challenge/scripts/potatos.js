$(document).ready(function() {
  $("#output").click(function() {
    var w0 = parseInt($('#w0').val());
    var p0 = parseInt($('#p0').val());
    var p1 = parseInt($('#p1').val());

    if(p0 < 1 || w0 < 1 || p1 > p0)
      $('#ans').text("Weight and Initial% must be greater than or equal to 1.Initial % must be greater tha post %");
    else
      $('#ans').text((w0*(100-p0))/(100-p1));

  });
});
