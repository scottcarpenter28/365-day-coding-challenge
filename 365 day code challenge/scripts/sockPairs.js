$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let socks = $('#socks').val();
    let pairs = 0;

    while(socks != ""){
      let lead = socks.charAt(0)
      socks = socks.substr(1);
      let match = socks.indexOf(lead);
      if(match >= 0){
        pairs++;
        socks = socks.substr(0,match)+socks.substr(match+1);
      }
    }
    
    $('#ans').text(pairs);
  });
});
