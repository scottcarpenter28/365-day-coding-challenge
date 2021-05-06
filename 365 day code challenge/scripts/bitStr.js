$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let str = $('#str').val()
      .toUpperCase()
      .split("")
      .map(c =>{
        let code = c.charCodeAt(0);
        if(code%2 == 0)
          return false;
        return true
      })
    $('#ans').text(str);
  });
});
