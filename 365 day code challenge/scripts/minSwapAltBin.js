$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let bin = $('#bin').val();
    let reg = /0{2}|1{2}/g;
    binMatch = bin.match(reg);
    $('#ans').text(`Swaps required: ${binMatch.length/2}`);
  });
});
