var res;
$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    res=0;
    var commands = $('#commands').val().split(", ").filter(str => str.toLowerCase().includes("simon says",0)).map(str => str.slice(11)).forEach(simonSays);
    $('#ans').text(res);
  });
});

function simonSays(str){
    if(str.toLowerCase().includes('add'))
      res+=parseInt(str.slice(4));
    else if(str.toLowerCase().includes('subtract'))
      res-=parseInt(str.slice(9));
    else if(str.toLowerCase().includes('multiply'))
      res*=parseInt(str.slice(9));
}
