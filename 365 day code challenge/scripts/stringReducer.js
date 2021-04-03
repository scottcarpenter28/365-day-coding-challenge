$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    //Initial setup to get result and value of the string
    let str = $('#str').val();
    // Regex matches all chars that repeat once
    let reg = /(.)\1{1}/gi;

    //Do one iteration and check to see if there are duplicates,
    // then run again if needed
    do{
      str = str.replace(reg, '');
    }while(str.match(reg) != null)

    // If the result is an empty string, change it to inform the user
    if(str.length == 0)
      str = "Empty String"

    $('#ans').text(str);
  });
});
