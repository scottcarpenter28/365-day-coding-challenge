$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var num = parseInt($('#num').val())
    $('#ans').text(remacan(num));
  });
});

function remacan(num){
  var remArr = [0];
  while(remArr.length < 10000){
    var last = remArr[remArr.length-1]
    var minus = last - remArr.length;
    var plus = last + remArr.length;
    if( !remArr.includes(minus) && minus > 0)
      remArr.push(minus);
    if(!remArr.includes(plus))
      remArr.push(plus);
    if(remArr.includes(num)){
        return remArr.indexOf(num);
    }
  }
  console.log(remArr)
  return -1;
}
