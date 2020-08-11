$(document).ready(function() {
  $("#output").click(function() {
    var letters = $('#letters').val().toLowerCase().split(' ');

    if(letters.length<2)
      $('#ans').text("Must be more than 2 letters")
    else{
        var previous = letters[0].charCodeAt(0);

        for(var i=1; i<letters.length;i++){
          console.log((letters[i].charCodeAt(0)-1) +" "+ previous);
          if((letters[i].charCodeAt(0)-1) !==previous)
            $('#ans').text(String.fromCharCode(letters[i].charCodeAt(0)-1))
          else
            previous = letters[i].charCodeAt(0);
        }
        $('#ans').text(String.fromCharCode(previous+1))
      }

  });
});
