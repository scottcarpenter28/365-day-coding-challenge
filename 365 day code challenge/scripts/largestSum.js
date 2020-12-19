$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var num = parseInt($('#num').val());
      if(num<=0)
        $('#ans').text("Number must be greater than 0.");
      else{
        var sum=0;
        var digit;
        while(num>0){
          if(sum==0 || addDigits(num)>sum){
            sum=addDigits(num);
            digit=num;
          }
          num--;
        }
        $('#ans').text(digit+'=>'+sum)
      }

  });
});

function addDigits(num){
  var val=0;
  num.toString().split('').map(n=>val+=parseInt(n));
  return val;
}
