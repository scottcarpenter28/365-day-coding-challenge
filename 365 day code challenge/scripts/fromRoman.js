$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num = $('#num').val();
    var romanMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
    var dec=0;

    for(var i=0; i<num.length;i++){
      if(romanMap[num.charAt(i)]<romanMap[num.charAt(i+1)]){
        dec+=romanMap[num.charAt(i+1)]-romanMap[num.charAt(i)];
        i++;
      }
      else
         dec+=romanMap[num.charAt(i)];
    }

    $('#ans').text(dec);
  });
});
