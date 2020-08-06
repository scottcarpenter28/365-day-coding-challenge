$(document).ready(function() {
  $("#output").click(function() {
    var change = parseFloat($('#change').val());
    var res = '';
    switch (change) {
      case 2.20:
        res = "Here is your Americano, have a nice day!"
        break;
      case 2.30:
        res = "Here is your Latte, have a nice day!"
        break;
      case 2.40:
        res = "Here is your Flat white, have a nice day!"
        break;
      case 3.50:
        res = "Here is your Filter, have a nice day!"
        break;
      default:
        res = "Sorry, exact change only, try again tomorrow!"
    }
    $('#ans').text(res);
  });
});
