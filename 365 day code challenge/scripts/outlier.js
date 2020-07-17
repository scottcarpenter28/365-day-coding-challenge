$(document).ready(function() {
  $("#output").click(function() {
      var set = $('#set').val().split(' ');

      var oddc =0;var odds;
      var evenc = 0; var evens;
      
      for(var i=0; i<set.length; i++){
        if(parseInt(set[i])%2 == 0){
          evens = i;
          evenc++;
        }
        else{
          odds =i;
          oddc++;
        }
      }

      if(evenc == 1)
        $('#outlier').text(set[evens]);
      else if(oddc ==1)
        $('#outlier').text(set[odds]);
      else
        $('#outlier').text('No outlier found');
    });
});
