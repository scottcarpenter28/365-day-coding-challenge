$(document).ready(function() {
  $("#output").click(function() {
    var wrd = $('#wrd').val().toUpperCase();
      var h1=0;
      var h2=0;
      for(var i=0; i<wrd.length; i++){
        if(i<wrd.length/2)
          h1+=wrd.charCodeAt(i)-64;
        else
          h2+=wrd.charCodeAt(i)-64;
      }

      if(h1==h2)
        $('#ans').text("Blanced word");
      else
      $('#ans').text("Not a blanced word");
  });
});
