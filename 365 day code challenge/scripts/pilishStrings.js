$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var str = $('#str').val();
    var pi = '3.14159265358979';
    var seperatedString = [];
    pi = pi.replace('.','').split('');

    while(str.length >= 1 && pi.length >=1){
      if(pi[0] == '.')
        pi.shift();
      var num = parseInt(pi.shift());
      var sepStr = str.substr(0,num)
      if(sepStr.length < num)
        sepStr = sepStr.substr(0,str.length-1)+str.charAt(str.length-1).repeat((num-sepStr.length+1))
      seperatedString.push(sepStr);
      str = str.substr(num);
    }

    $('#ans').text(seperatedString.join(' '));
  });
});
