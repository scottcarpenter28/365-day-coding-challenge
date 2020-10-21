$(document).ready(function() {
  $("#output").click(function() {
    $('#ans').text($('#binary').val().match(/.{1,8}/g).map(toAscii).join(''));
  });
});

function toAscii(binary) {
  var ascii = 0;
  binary.split('').forEach(function(item, i){if(item==1)ascii+= Math.pow(2*parseInt(item), binary.length-1-i);});
  return String.fromCharCode(ascii);
}
