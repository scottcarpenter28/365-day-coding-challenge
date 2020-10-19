$(document).ready(function() {
  $("#output").click(function() {
    var low = parseInt($('#low').val());
    var high  = parseInt($('#high').val());

    if(low>=high)
      $('#ans').text('Low must be less than high.');
    else{
      var i=1;
      var inRange=0;
      while(Math.pow(i,2)<=high){
        if(Math.pow(i,2)>=low && Math.pow(i,2)<=high)
          inRange++;
        i++;
      }
      $('#ans').text(inRange);
    }

  });
});
