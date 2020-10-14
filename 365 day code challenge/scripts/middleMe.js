$(document).ready(function() {
  $("#output").click(function() {
    $('#ans').text((parseInt($('#N').val())%2!==0)? $('#X').val() : $('#Y').val().repeat(parseInt($('#N').val())/2)+ $('#X').val() +$('#Y').val().repeat(parseInt($('#N').val())/2));
  });
});
