$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var balloon = $('#nums').val().split(',').map(n => parseInt(n));
      var mid = balloon[Math.floor(balloon.length/2)]-1;
      var offset=1;

      while(mid>0 && mid>0 && offset+(balloon.length/2)<balloon.length){
        balloon[(Math.floor(balloon.length/2))+offset]=mid;
        balloon[(Math.floor(balloon.length/2))-offset]=mid;
        mid--;
        offset++;
        $('#ans').text(balloon.toString());
      }

  });
});
