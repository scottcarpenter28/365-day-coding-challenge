$(document).ready(function() {
    // Get value on button click and show alert
    $("#eq").click(function() {
      var num1 = $('#num1').val();
      var num2 = $('#num2').val();
      var found = false;

      var temp1;
      var temp2;
      for (var i = 0; i < num1.length; i++) {
          temp1 = num1.charAt(i) + num1.charAt(i) + num1.charAt(i);
          temp2 = num1.charAt(i) + num1.charAt(i)
          if(num1.indexOf(temp1)!=-1 && num2.indexOf(temp2)){
            $('#ans').text('A triple of '+temp1+' was found in number 1, and a double of '+temp2+' was found in number 2');
            found=true;
          }
        }
        if(!found)
          $('#ans').text('No Triple and double found.');
    });
  });
