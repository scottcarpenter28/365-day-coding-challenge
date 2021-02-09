const chineseNumbers = {
  0: '零',
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
  7: '七',
  8: '八',
  9: '九',
  10: '十',
  100: '百',
  1000: '千',
  10000: '万'
}

$(document).ready(function() {
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    if(num < 0 || num > 99999)
      $('#ans').text("Number must be between 0 and 99,999");
    else
      $('#ans').text(convertNumber(num));
  });
});

function convertNumber(num){
  var str = '';
  for(var i = 4; i>= 0; i--){
    var ten_to_the_i = Math.pow(10,i);
    if(num >= ten_to_the_i){
      var temp = num % ten_to_the_i;
      num -= temp;
      var digit = num/ten_to_the_i;
              console.log(digit);
      if(digit == 1)
        str += chineseNumbers[num];
      else if(i != 0)
        str+= chineseNumbers[digit] + chineseNumbers[ten_to_the_i];
      else
        str+= chineseNumbers[digit];
      num = temp;
    }
  }
  return str;
}
