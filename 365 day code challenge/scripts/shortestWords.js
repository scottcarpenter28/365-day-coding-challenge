$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let sentence = $('#sentence').val()
      .toLowerCase()
      .split(' ')
      .sort((a,b) =>{
        if(a.length < b.length)
          return -1;
        else if(a.length > b.length)
          return 1;
        else{
          for(var i = 0; i < a.length; i++){
            if(a.charCodeAt(i) < b.charCodeAt(i))
              return -1;
            else if(a.charCodeAt(i) > b.charCodeAt(i))
              return 1;
          }
          return -1;
        }
      });
    sentence = sentence.filter(word => word.length == sentence[0].length);
    $('#ans').text(sentence);
  });
});
