$(document).ready(function() {
  $("#output").click(function() {
    var before = parseFloat($('#before').val());
    var after = parseFloat($('#after').val());

    if(before <0 || after<0)
      $('#ans').text('Numbers must be greater than 0');
    else{
      var ans = getRate(before, after);
      ans = Math.round(ans);
      if(ans >0)
        $('#ans').text('A positive evolution of '+ ans+'%');
      else if(ans <0)
          $('#ans').text('A negative evolution of '+ ans+'%');
      else
        $('#ans').text('No evolution');
    }
  });
});
 function getRate(before, after){
   if(before ==0)
    return Math.round(after*100);
  else if(after ==0)
    return Math.round(before*100);
  else
    return Math.round((after-before)/before *100);
 }
