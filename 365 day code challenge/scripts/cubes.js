$(document).ready(function() {
  $("#output").click(function() {
      var vol = parseInt($('#vol').val());
      var cubes = 1;
      var size = 1;

      while(cubes < 10000000 && size <= vol){
        size += Math.pow(cubes,3);
        cubes++;
      }
      if(size==vol)
        $('#ans').text(cubes-1);
      else
        $('#ans').text(0);
    });
});
