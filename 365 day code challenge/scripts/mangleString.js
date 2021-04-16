$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let str = $('#str')
      .val()
      .split("")
      .map(char =>{
        if(char.match(/[a-z]/gi) == null)
          return char;
        if(char === 'z')
          return 'a';
        else if(char ==='Z')
          return 'A';
        let newCode = char.charCodeAt(0)+1;
        return String.fromCharCode(newCode);
      })
      .join('');
    $('#ans').text(str);
  });
});
