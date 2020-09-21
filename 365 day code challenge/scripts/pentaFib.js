$(document).ready(function() {
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    if(num<=0)
      $('#ans').text('Number must be greater than 4');
    else{
      var f=[0, 1, 1, 2, 4];
      $('#ans').text(pentaFib(f,num).filter(val => val%2==1).length-1);
    }
  });
});

function pentaFib(f,num){
  while(f.length<=num)
    f.push(f[f.length-1] + f[f.length-2] + f[f.length-3] + f[f.length-4] + f[f.length-5]);
  console.log(f);
  return f;
}
