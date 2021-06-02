$(document).ready(function() {
  const morseToDots = {
  ".-":"A",
  "-...":"B",
  "-.-.":"C",
  "-..":"D",
  ".":"E",
  "..-.":"F",
  "--.":"G",
  "....":"H",
  "..":"I",
  ".---":"J",
  "-.-":"K",
  ".-..":"L",
  "--":"M",
  "-.":"N",
  "---":"O",
  ".--.":"P",
  "--.-":"Q",
  ".-.":"R",
  "...":"S",
  "-":"T",
  "..-":"U",
  "...-":"V",
  ".--":"W",
  "-..-":"X",
  "-.--":"Y",
  "--..":"Z",
  "-----":"0",
  ".----":"1",
  "..---":"2",
  "...--":"3",
  "....-":"4",
  ".....":"5",
  "-....":"6",
  "--...":"7",
  "---..":"8",
  "----.":"9",
  "-.-.--":"!",
  "   ":" ",
  "..--..":"?",
  ".-.-.-":".",
  ".----.":'"',
  "---...":":",
  "--..--":", ",
  " ":""
}
  $("#output").click(function() {
    let morse = $('#morse').val()
      .split(' ')
      .map(code => morseToDots[code]);
  let result ="";
  for(var i=0; i < morse.length; i++){
    if(morse[i] != undefined)
      result += morse[i];
    else
      result+=' '
  }
  $('#ans').text(result);
  });
});