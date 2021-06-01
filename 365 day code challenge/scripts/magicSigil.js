$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let str = $('#str').val()
      .toUpperCase()
      .split(' ')
      .join('');
    let sigil = '';

    for(var i = 0; i < str.length; i++){
      let cur = str.charAt(i);
      console.log(sigil);
      if(cur !='A' && cur !='E' && cur !='I' && cur !='O' && cur !='U')
        sigil += cur;
    }

    $('#ans').text(sigil);
  });
});
