$(document).ready(function() {
  $("#output").click(function() {
    var evaporatorAmount = parseInt($('#evaporatorAmount').val());                //Amount in ml
    var evapPercent = parseInt($('#evapPercent').val())/100;                      //Percent lost per day
    var percentUsefull = evaporatorAmount*(parseInt($('#percentUsefull').val())/100);   //The minimum amount the foam is usefull

    if(evaporatorAmount<=0 || evapPercent<=0 || percentUsefull<=0)
      $('#ans').text("All numbers must be greater than 0");
    else{
      var days=0;
      while(evaporatorAmount >= percentUsefull && days <Number.MAX_VALUE){
        evaporatorAmount -= (evaporatorAmount*evapPercent);
        days++;
      }
      $('#ans').text(days+" Days");
    }
  });
});
