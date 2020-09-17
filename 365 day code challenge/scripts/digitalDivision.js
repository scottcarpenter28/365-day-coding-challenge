$(document).ready(function() {
  $("#output").click(function() {
    var original = $('#num').val();
    var num = parseInt(original);
    var splitNum = original.split('');
    var sum = parseInt(splitNum[0]);
    var product = parseInt(splitNum[0]);

    for (var i = 1; i < splitNum.length; i++) {
      sum += parseInt(splitNum[i]);
      product *= parseInt(splitNum[i]);
    }
    var res = '';
    if (num % sum == 0)
      res += num + ' is divisble by the sum of its numbers ' + sum+'.';
    if (num % product == 0)
      res += num + ' is divisble by the product of its numbers ' + product+'.';
console.log(res);
    if (res = '')
      $('#ans').text('Sum and product of the numbers are not divisble');
    else
      $('#ans').text(res);
  });
});
