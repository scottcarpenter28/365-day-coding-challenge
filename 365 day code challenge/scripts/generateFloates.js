$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let end = parseFloat($("#end").val());
    let inc = parseFloat($("#inc").val());
    let range = [];

    for(var i = 0; i < end; i+=inc){
      range.push(i);
    }

    $('#ans').text(range);
  });
});
