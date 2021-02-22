$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var words = $('#words').val().split(', ');
    $('#ans').text(words[alphabeticWord(words)]);
  });
});

function alphabeticWord(words){
  //Returns the index of the greatest alphabetic word
  words = words.map(
    wrd => isAphabetic(wrd)
  );

  return words.indexOf(Math.max(...words));
}

function isAphabetic(word){
   var count = 0;
  for(var i=1; i<word.length; i++){
    if(word.charCodeAt(i-1) > word.charCodeAt(i))
      return -1;
    count++;
  }
  count++;
  return count;
}
