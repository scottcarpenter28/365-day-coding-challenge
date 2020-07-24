var key;
$(document).ready(function() {
  $("#output").click(function() {
    key = parseInt($('#key').val());
    if (key >= 1 && key <= 26) {
      $('#crypted').text($('#str').val().toUpperCase().split('').map(crypt).join(''));
    } else {
      $('#crypted').text('Key must be between 1 and 26');
    }
  });
});

function crypt(s) {
  if (s.charCodeAt(0) == 32)
    return s;
  else {
    if((s.charCodeAt()+key)>90){
      var c = 65+((s.charCodeAt()+key)-90);
      return String.fromCharCode(c);
    }
    else{
        return String.fromCharCode(s.charCodeAt()+key);
    }
  }
}
