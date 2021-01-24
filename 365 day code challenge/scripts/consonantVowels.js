$(document).ready(function() {
  $("#output").click(function() {
    var str = $('#str').val().split(' ');
    var result = '';

    //Regular expresultsions
    var consonants = /[bcdfghjklmnpqrstvwxyz]/gi;
    var vowels = /[aeiou]/gi;


    //Gets result
    result += findletters(str,consonants)
    result += ', ';
    result += findletters(str, vowels)

    $('#ans').text(result);
  });
});

function findletters(str, reg){
  var res='';
  for(var i=0; i<str.length; i++){
    var matchingLetters = str[i].match(reg);
    if(matchingLetters != null)
      res+=matchingLetters.length+' ';
    else
      res+=0+' ';
  }
  return res;
}
