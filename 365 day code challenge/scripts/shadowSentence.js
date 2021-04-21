$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let sen1 = $('#sen1').val().split(" ");
    let sen2 = $('#sen2').val().split(" ");

    let result = false;
    if(sen1.length == sen2.length)
      result = checkStructure(sen1, sen2)

      $('#ans').text(result)
  });
});

function checkStructure(sen1, sen2){
  return sen1.every((wrd1, i) =>{
    let wrd2 = sen2[i];
    if(wrd2.length != wrd1.length)
      return false;
    return checkForLetters(wrd1,wrd2)
  });
}

function checkForLetters(wrd1,wrd2){
  wrd1 = wrd1.split('');
  return wrd1.every(char => wrd2.indexOf(char) == -1);
}
