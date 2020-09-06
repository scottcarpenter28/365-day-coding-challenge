$(document).ready(function() {
  $("#output").click(function() {
    var numChirps = parseInt($('#numChirps').val());
    if(numChirps <=0 )
      $('#ans').text("Number must be greater than or equal to 1.")
    else
      $('#ans').text("Chirp"+recursiveNinja(numChirps-1));
  });
});

function recursiveNinja(numChirps){
  if(numChirps == 0)
    return ".";
  else
    return "-Chirp"+recursiveNinja(numChirps-1);
}
