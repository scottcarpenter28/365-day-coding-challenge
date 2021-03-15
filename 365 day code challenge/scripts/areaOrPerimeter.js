$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var len = parseFloat($('#len').val());
    var wid = parseFloat($('#wid').val());

    if(len <= 0 || wid <= 0)
      $('#ans').text("All values must be greater than 0.");
    else if(len == wid)
      $('#ans').text(len**2);
    else
      $('#ans').text((len*2)+(wid*2));
  });
});
