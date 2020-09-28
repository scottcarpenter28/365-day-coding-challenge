$(document).ready(function() {
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    if(num<=0)
      $('#ans').text("Number must be greater than or equal to 1");
    else
      $('#ans').text(collatz(num, 0)-1+' steps');
  });
});

function collatz(num,res){
  res++;
  if(num==1){
    console.log('\n');
    return res;
  }
  else if(num%2==1){
    console.log((num*3)+1);
    return collatz((num*3)+1,res);
  }
  else {
    console.log(num/2);
    return collatz(num/2,res);
  }
}
