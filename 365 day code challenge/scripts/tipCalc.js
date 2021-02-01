const ratings = {
  'terrible' : 0.00,
  'poor' : .02,
  'good' : .10,
  'great' : .15,
  'excellent' : .20
};

$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var price = parseFloat($('#price').val());
    var rating = $('#rating').val().toLowerCase();

    if(price<0)
      $('#ans').text('Price must be greater than 0');
    else if(ratings[rating] === undefined)
      $('#ans').text('Rating Not Recognized');
    else{
      var tip = Math.ceil(ratings[rating]*price);
      $('#ans').text(tip);
    }
  });
});
