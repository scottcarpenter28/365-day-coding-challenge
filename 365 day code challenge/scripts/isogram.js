$(document).ready(function() {
  $("#output").click(function() {
    var wrd = $('#wrd').val().toLowerCase().split("");
    var isogram = true;
    var i=0;
    while(isogram && i<wrd.length){
      if(i!= wrd.lastIndexOf(wrd[i]))
        isogram =false;
      i++;
    }
    $('#ans').text(isogram);
  });
});
