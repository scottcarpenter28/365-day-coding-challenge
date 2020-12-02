$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var sms = $('#sms').val();

      while(sms.length>160 && sms.includes(' ')){
        var last=sms.lastIndexOf(' ');
        sms = sms.substring(0,last)+sms.charAt(last+1).toUpperCase()+sms.substr(last+2);
      }

      $('#ans').text(sms);
  });
});
