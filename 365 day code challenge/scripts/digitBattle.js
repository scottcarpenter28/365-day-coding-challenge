$(document).ready(function() {
  $("#output").click(function() {
    var num = $('#num').val().split('').map(digit => parseInt(digit));
    if(num.length<2)
      $('#ans').text('Must be 2 or more digits.');
    else{
      var output='';

      while(num.length>1){
        var val1 = num.shift();
        var val2 = num.shift();
        if(val1>val2)
          output+=val1+' defeats '+val2+', ';
        else if(val2>val1)
          output+=val2+' defeats '+val1+', ';
        else
          output+=val2 +' ties '+val1+', ';
      }

      if(num.length==1)
        output+=num.shift()+' is single.';
      $('#ans').text(output);
    }

  });
});
