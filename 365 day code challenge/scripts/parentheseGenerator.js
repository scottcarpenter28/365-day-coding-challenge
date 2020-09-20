$(document).ready(function() {
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    var res ='';

    for(var i=0; i<num*2; i++){
      if(i<num)
        res+='(';
      else
        res+=')';
    }
    res+=',';

    for(var i=0; i<= num;i++){
      if(i==0)
      res+='(';
      else if(i==num)
        res+=')';
      else
        res+='()';
    }
    res+=',';
    
    for(var i=0; i<num;i++)
      res+='()';

    $('#ans').text(res);
  });
});
