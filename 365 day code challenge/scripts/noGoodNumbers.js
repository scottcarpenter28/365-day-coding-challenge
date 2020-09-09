$(document).ready(function() {
  $("#output").click(function() {
    var num = parseInt($('#num').val());
    var binary = toBinary(num);
    $("#ans").text(noGoodNums(binary)+" Binary: "+binary);
  });
});

function toBinary(num) {
  var count = 0;
  var returnBinary = '';
  for (var i = parseInt(Math.sqrt(num)); i >= 0; i--) {
    if ((count + Math.pow(2, i)) > num)
      returnBinary += '0';
    else {
      count += Math.pow(2, i);
      returnBinary += '1';
    }
  }
  return returnBinary;
}

function noGoodNums(binary) {
  var ones = 0;
  for (var i = 0; i < binary.length; i++) {
    if (binary.charAt(i) == '1')
      ones++;
  }

  var res = ''
  if (ones % 2 == 0)
    res += ' Evil';
  else
    res += ' Odious';
  if(testPrime(ones))
    res += ', pernicious'
  return res;
}

function testPrime(n) {
  if (n === 1)
    return false;

  else if (n === 2)
    return true;
  else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0)
        return false;
    }
    return true;
  }
}
