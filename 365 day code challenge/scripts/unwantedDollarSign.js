$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var price = $('#price').val()
    price = parseFloat(
      price.replace(/[a-z\s$]*/gi,'')
    ).toFixed(2);

    $('#ans').text(price);
  });
});
