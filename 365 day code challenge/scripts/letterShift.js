$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let sentence = $('#sentence').val()
    let num = parseInt($('#num').val())
    if(num > sentence)
      $('#ans').text(result != null);
    else{
      sentence = sentence.split(' ');
      let carry ="";
      for(var i=0; i<num; i++){
        for(var k = 0; k<sentence.length;k++){
          temp = sentence[k].split('')
          temp.unshift(carry)
          carry = temp.pop();
          sentence[k] = temp.join('')
        }
      }
      sentence[0] = sentence[0].split('')
      sentence[0].unshift(carry);
      sentence[0] = sentence[0].join('')
      $('#ans').text(sentence.join(' '));
    }
  });
});
