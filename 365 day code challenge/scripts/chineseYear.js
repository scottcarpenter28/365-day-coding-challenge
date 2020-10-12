var elements = ['Metal', 'Metal', 'Water', 'Water', 'Wood', 'Wood', 'Fire', 'Fire', 'Earth', 'Earth'];
var animal = ['monkey', 'rooster', 'dog', 'pig', 'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'sheep'];
$(document).ready(function() {
  $("#output").click(function() {
    var year = parseInt($('#year').val());
    $('#ans').text(elements[year%10]+' '+animal[year%12]);
  });
});
