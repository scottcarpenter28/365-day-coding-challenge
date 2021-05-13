$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let str = $('#str').val()
      .split(' ')
      .map(wrd =>{
        if(wrd.length % 2 == 0)
          return wrd;
        return wrd.split('')
          .reverse()
          .join('');
      })
      .join(' ')

    $('#ans').text(str);
  });
});
