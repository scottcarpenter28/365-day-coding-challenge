$(document).ready(function() {
  $("#output").click(function() {
    var numSet = $('#numSet').val().split('');
    var beggars = parseInt($('#beggars').val());
    var beggarAmt=Array(beggars).fill(0);
    for(var i=0; i<numSet.length; i++){
      beggarAmt[i%beggars]+= parseInt(numSet[i]);
    }
    $('#ans').text(beggarAmt.join((', ')))
  });
});
