$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var strArr = $('#str').val().split(" ");
    var str = reverser(strArr);
    str = inverter(str.join(' '));
    $('#ans').text(str);
  });
});

function reverser(strArr){
  var temp = [];
  for(var i = 0; i < strArr.length; i++){
    var charArr = strArr[i].split('');
    charArr = charArr.reverse();
    temp.unshift(charArr.join(''));
  }
  return temp;
}

function inverter(str){
  var temp = ""
  for(var i = 0; i < str.length; i++){
    var charCode = str.charCodeAt(i);
    if(charCode < 90)
      temp += str.charAt(i).toLowerCase();
    else
      temp += str.charAt(i).toUpperCase();
  }
  return temp;
}
