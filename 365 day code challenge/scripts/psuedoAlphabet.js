$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var str = $('#str').val();
    var upper = str.match(/([A-Z])\w+/g).sort(sortUpper)
    var lower = str.replace(/([A-Z])[a-z]+/g, '');
    lower = lower.match(/[a-z]+/g).sort(sortLower);
    $('#ans').text(lower.join(' ')+' '+upper.join(' '));
  });
});

function sortLower(strA, strB){
  var codeA = strA.charCodeAt(0);
  var codeB = strB.charCodeAt(0);

  if(strA < strB)
    return -1;
  else if(strA > strB)
    return 1;
  return 0;
}

function sortUpper(strA, strB){
  var codeA = strA.charCodeAt(0);
  var codeB = strB.charCodeAt(0);

  if(strA < strB)
    return 1;
  else if(strA > strB)
    return -1;
  return 0;
}
