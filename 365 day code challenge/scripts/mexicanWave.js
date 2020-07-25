$(document).ready(function() {
  $("#output").click(function() {
    var wrd = $('#wrd').val().toLowerCase();
    console.log(wrd);
    for(var i=0; i<wrd.length; i++)
      console.log(wrd.substr(0,i)+wrd.charAt(i).toUpperCase()+wrd.substr(i+1));
  });
});
