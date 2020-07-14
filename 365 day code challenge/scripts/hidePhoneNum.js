$(document).ready(function() {
  $("#output").click(function() {
      $('#hiden').text($('#num').val().match(/\d{3}-\d{3}-\d{4}/g).toString().substring(0,5)+'xx-xxxx')
    });
});
