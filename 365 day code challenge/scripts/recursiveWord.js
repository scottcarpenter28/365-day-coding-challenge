$(document).ready(function() {
  $("#output").click(function() {
    var sentence = $('#sentence').val().split(' ');
    if(sentence.length<=1)
      $('#ans').text('Must have at least 2 words')
    else
      $('#ans').text(recusiveSearch(sentence));
  });
});

function recusiveSearch(sentence){
  if(sentence.length<=1)
    return sentence.shift();
  else{
    var wrd1 = sentence.shift();
    var wrd2 = recusiveSearch(sentence)
    if(wrd1.length<wrd2.length)
      return wrd2;
    else
      return wrd1;
  }
}
