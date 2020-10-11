$(document).ready(function() {
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    if(num ==0)
      $('#ans').text('1');
    else{
      $('#ans').text(altFact(num));
    }

  });
});

function altFact(num){
  if(num==1 || num ==-1)
    return num;
  else if(num<0)//If the number is negative, make it positve then subtract 1
    return num*altFact((num*-1)-1);
  else//If the number is positive, subtract 1 then make it negative.
    return  num*altFact(-1*(num-1));;
}
