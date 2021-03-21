$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num = $('#num1').val();
    var result = [];
    
    num.split('').forEach((cur, ind) =>{
      if(cur != '0'){
        var rep = num.length-ind-1;
        result.push(
          `${cur + '0'.repeat(rep)}`
        );
      }
    });

    $('#ans').text(result.join('+'))
  });
});
