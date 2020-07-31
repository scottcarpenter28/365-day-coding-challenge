$(document).ready(function() {
  $("#output").click(function() {
    var phone = $('#phone').val();
    if(phone.match(/\d{3}-?\d{3}-?\d{4}/)){
      var lastNum = parseInt(phone.substr(phone.length-1));
      var plus = lastNum+1;
      var minus = lastNum-1;
      if(plus == 10) plus=0;
      if(minus == -1) minus=9;
      $('#neighbors').text(phone.substr(0,phone.length-2)+(minus)+", and"+phone.substr(0,phone.length-2)+(plus));
    }
    else
    $('#neighbors').text('Invalid');
  });
});
