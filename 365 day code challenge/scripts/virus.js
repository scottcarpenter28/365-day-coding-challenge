$(document).ready(function() {
  $("#output").click(function() {
    var str = $('#str').val().split(' ');

    for(var i=0; i<str.length; i++){
      if(i==0){
        str[i] = findie(str[i]);
        str[i] = str[i].substring(0,1).toUpperCase() + str[i].substr(1).toLowerCase();
      }
      else{
        str[i] = str[i].toLowerCase();
        str[i] = findie(str[i]);
      }
    }

    $('#fixed').text(str.join(' '));
  });
});


function findie(s){
  var loc = s.indexOf('ie');
  if(loc == 0){
    return 'ei' + s.substr(2);
  }
  else if(loc !=-1){
    return s.substr(0,loc)+'ei'+s.substring(loc+2);
  }
  else {
    return s;
  }
}
