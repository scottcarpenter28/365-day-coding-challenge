$(document).ready(function() {
  $("#output").click(function() {
    var rng = parseInt($('#rng').val());
    var bird = parseInt($("#bird").val());

    if(rng>0 && bird<=rng){
      var rngStr = createRange(rng);
      var first = rngStr.indexOf(bird);
      var second = rngStr.substring(first+bird.toString().length-1).indexOf(bird)+first+1;
      if(first !=-1 && second !=-1)
        $('#ans').text('Early Bird, first bird starts at '+first+' and found again starting at '+second+'.')
      else if(second==-1)
        $('#ans').text('first bird starts at '+first+' and is not found again.')
      else
        $('#ans').text('Bird not found');
    }
    else
      $('#ans').text('Range must be greater than 0, and early bird must be less than or equal to range.')

  });
});

function createRange(rng){
  var s='';
  for(var i=0; i<=rng; i++)
    s+=i+'';
  return s;
}
