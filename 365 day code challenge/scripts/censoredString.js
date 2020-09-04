$(document).ready(function() {
  $("#output").click(function() {
    var str = $('#str').val();
    var vowels = $('#vowels').val().split('');
    var fixed='';

    for(var i=0; i<str.length; i++){
      if(str.charAt(i)=='*')
        fixed+=vowels.shift();
      else fixed+=str.charAt(i);
    }
    $('#ans').text(fixed);
  });
});
