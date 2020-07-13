$(document).ready(function() {
  $("#output").click(function() {
    var ip1 = $('#IP1').val().split('.');
    var ip2 = $('#IP2').val().split('.');
    var total = 1;
    for(var i=0; i<ip1.length; i++){
      var temp=0;
      if(parseInt(ip1[i])-parseInt(ip2[i]) != 0){
        if(parseInt(ip2[i]) ==0)
          temp += 256 - parseInt(ip1[i]);
        else
        temp += parseInt(ip2[i]) - parseInt(ip1[i])
      }
      if(temp !=0)total *=temp;
    }
    $('#count').text(total);
  });
});
