$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let str = $('#str').val()
      .split(" ")
      .map(wrd =>{
        let index = wrd.search(/[aeiou]/gi);
        if(index==-1)
          return wrd+'ay';
        else if(index==0)
          return wrd+'way';
        wrd = wrd.substr(index)+wrd.substr(0,index);
        return wrd+'ay';
      })
      .join(' ');

    $('#ans').text(str);
  });
});
