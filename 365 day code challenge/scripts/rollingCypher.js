$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var str = $('#str').val().toLowerCase();
      var cypher = parseInt($('#num').val());

      if(cypher<0)
        cypher=26+(cypher%26);
      str = str.split('');
      for(var i=0; i<str.length; i++){
        var cCode = str[i].charCodeAt(0)+(cypher%26)
        if(cCode>122)
          cCode -=26;
        str[i]=String.fromCharCode(cCode);
      }
      
      $('#ans').text(str.join(''));
  });
});
