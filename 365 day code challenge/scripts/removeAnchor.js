$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let url = $('#url').val();
    if(url.includes('#'))
      url = url.substr(0,url.indexOf('#'));
    $('#ans').text(url);
  });
});
