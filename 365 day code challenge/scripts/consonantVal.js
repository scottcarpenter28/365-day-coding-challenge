$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var str = $('#str').val().toLowerCase().split(/[aeiou]+/);
      var max =0;

      for(var i=0; i<str.length; i++){
        var score=0;
        str[i].split('').map(c=>score+=parseInt(c.charCodeAt(0))-96);
        if(score>max)
          max=score;
      }

      $('#ans').text(max);
  });
});
