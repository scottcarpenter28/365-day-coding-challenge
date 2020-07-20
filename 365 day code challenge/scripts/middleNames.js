$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var names = $('#name').val().split(' ');
    for(var i=1; i<names.length-1; i++)
      names[i] = names[i].substr(0,1)+'.';
    $('#shortend').text(names.join(' '));
  });
});
