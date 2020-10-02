$(document).ready(function() {
  $("#output").click(function() {
    var str = $('#str').val().split(' ');
    var res =false;

    for(var i=0; i<str.length; i++){
      if(str[i].length>3){
        console.log(str[i]);
        for(var k=1; k<str[i].length; k++){
          console.log(str[i].charCodeAt(k-1) +' '+str[i].charCodeAt(k));
          if(k == str[i].length-1 && str[i].charCodeAt(k-1) <=str[i].charCodeAt(k))
            res =true;
          else if(str[i].charCodeAt(k-1)>str[i].charCodeAt(k))
            break;
        }
      }
    }
    $('#ans').text(res);

  });
});
