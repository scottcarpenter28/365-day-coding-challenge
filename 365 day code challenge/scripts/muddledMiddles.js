$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let words = $('#words').val()
      .split(' ')
      .map(makeMuddled);
    $('#ans').text(words.join(' '));
  });
});

function makeMuddled(word){
  if(word.length < 3)
    return word;
  return word.charAt(0) +
      word.substr(1,word.length-2).split('').reverse().join('') +
      word.charAt(word.length-1);
}
