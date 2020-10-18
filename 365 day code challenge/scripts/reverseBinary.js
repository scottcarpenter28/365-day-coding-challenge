$(document).ready(function() {
  $("#output").click(function() {
    var num = Math.abs(parseInt($('#num').val()));
    var binary = toBinary(num);

    var reverseNum = 0;
    for(var i=binary.length-1;i>=0; i--){
      reverseNum+=Math.pow(2*binary[i],i);
    }

    $('#ans').text(num+' => '+binary.join('')+' reversed '+ binary.reverse().join('')+' => '+reverseNum);
  });
});

function toBinary(num){
  var res=[];
  var test=0;

  for(var i=64; i>=0; i--){
    if(num-Math.pow(2,i)>=0){
      res.push(1);
      num-=Math.pow(2,i);
    }
    else res.push(0);
  }

  return res.slice(res.indexOf(1));
}
