$(document).ready(function() {
  $("#output").click(function() {
      var word = $('#word').val();
      var res='';
      for (var i = 1; i < word.length; i++) {
        res+=word.substring(0,i)+'\n ';
      }
      console.log(' '+res+word+'\n'+res.split(' ').reverse().join(' '));
  });
});
