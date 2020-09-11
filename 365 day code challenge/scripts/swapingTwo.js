$(document).ready(function() {
  $("#output").click(function() {
    var str =$('#str').val();
    var res ='';
    for(var i=0;i< str.length;i+=4){
      if((i+3) < str.length){
        console.log(str.substring(i+2,i+3)+str.substring(i,i+1));
          res += str.substring(i+2,i+4)+str.substring(i,i+2);
      }
      else res += str.substr(i);
    }
    $('#ans').text(res);
  });
});
