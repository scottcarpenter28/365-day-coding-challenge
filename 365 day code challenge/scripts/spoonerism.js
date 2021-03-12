$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var wrds = $("#wrds").val().split(' ')
    if(wrds.length <= 1)
      $('#ans').text('Must have 2 words for a spoonerism')
    else{
      var spoonerism = wrds[1].charAt(0)+wrds[0].substr(1) + ' ';
      spoonerism += wrds[0].charAt(0)+wrds[1].substr(1);
      $("#ans").text(spoonerism);
    }
  });
});
