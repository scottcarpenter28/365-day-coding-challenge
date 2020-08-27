$(document).ready(function() {
  $("#output").click(function() {
    var denom = parseInt($('#denom').val());
    var reduce =[];
    if(denom <= 0)
      $('#ans').text('Denominator can not be less than or equal to 0');
    else{
      if(denom==1)
        $('#ans').text('0 proper fractions');

      else{
        var count =0;
          for(var n=1; n<denom;n++){
            if(gcd(n, denom)==1)
              count++;
          }
          $('#ans').text(count+' proper fractions');
        }
      }

  });
});

function gcd (n, d){
  if(d==0)
    return n;
  else
    return gcd(d, n%d)
}
