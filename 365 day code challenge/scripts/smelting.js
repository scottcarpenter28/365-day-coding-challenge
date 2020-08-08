$(document).ready(function() {
  $("#output").click(function() {
    var ingots  = parseFloat($('#ingots').val());
    var time = 11*ingots;

    var lava = Math.floor(time/800);
    time -= (lava*800);

    var blaze = Math.floor(time/120);
    time -= (blaze*120);

    var coal = Math.floor(time/80);
    time -= (coal*80);

    var wood = Math.floor(time/15);
    time -= (wood*15);

    $('#ans').text('Lava buckets: '+lava+', Blaze rods: '+blaze+', Coal: '+coal+', Wood: '+wood+', Sticks: '+time);

  });
});
