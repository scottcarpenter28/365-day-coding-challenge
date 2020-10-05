$(document).ready(function() {
  $("#output").click(function() {
    var month = parseInt($('#month').val())-1;
    var yr = parseInt($('#yr').val());
    if(yr<0 || (month>11 || month<0))
      $('#ans').text('Month must be between 1 and 12, year must be greater than 0.');
    else{
      var d = new Date(yr, month, 13, 12);
      if(d.getDay() == 5)
          $('#ans').text('Yes, month has firday 13th');
      else
          $('#ans').text('No friday 13th');
    }
  });
});
