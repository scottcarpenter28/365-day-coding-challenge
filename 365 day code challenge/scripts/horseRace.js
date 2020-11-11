$(document).ready(function() {
  $("#output").click(function() {
    var horses = Math.floor(parseInt($('#horses').val()));
    if(horses<3)
      $('#ans').text(horses);
    else
      $('#ans').text((horses)*(horses-1)*(horses-2));
  });
});
