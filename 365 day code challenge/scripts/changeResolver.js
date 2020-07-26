$(document).ready(function() {
  $("#output").click(function() {
    var change = parseInt($('#change').val());
    var q = Math.floor(Math.floor(change/25))
    change -= (q*25);
    var d = Math.floor(change/10);
    change -= (d*10);
    var n = Math.floor(change/5);
    change -= (n*5);
    $('#coins').text("Quaters: "+q+" Dimes: "+d+" Nickles: "+n+" Pennies: "+change);
  });
});
