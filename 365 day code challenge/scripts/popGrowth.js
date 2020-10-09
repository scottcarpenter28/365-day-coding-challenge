$(document).ready(function() {
  $("#output").click(function() {
    var population = parseInt($('#population').val());
    var startPopulation = 1000;
    var years=0;
    while(startPopulation < population){
      startPopulation+= startPopulation*.02+50;
      years++;
    }
    $('#ans').text(years+' years to reach a population of '+Math.floor(startPopulation));
  });
});
