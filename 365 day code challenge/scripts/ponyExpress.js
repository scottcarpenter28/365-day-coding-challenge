$(document).ready(function() {
  $("#output").click(function() {
    var outPosts = $('#outPosts').val().split(' ');
    var riders = 1;
    var miles=0;

    for(var i=0; i<outPosts.length-1;i++){
      if(miles>=100){
        riders++;
        miles=0;
      }
        miles+=parseInt(outPosts[i]);

    }

    if(miles>=100){
      riders++;
      miles=0;
    }
    $('#ans').text(riders+' riders');
  });
});
