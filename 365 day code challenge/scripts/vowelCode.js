const vowels={
  'a': 1,
  'e': 2,
  'i': 3,
  'o': 4,
  'u': 5,
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u'
};

$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var str = $('#str').val();
    $('#ans').text(replaceVowels(str));
  });
});

function replaceVowels(str){
  str = str.split('');
  for(var i = 0; i < str.length; i++){
    if(vowels[str[i]] > 0 || parseInt(str[i]) > 0 )
      str[i] = vowels[str[i]];
  }
  return str.join('');
}
