$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let str = $('#str')
      .val()
      .split(" ")
      .map(wrd =>{
        if (wrd.length <= 2)
          return wrd;
        let mid = wrd.substr(1,wrd.length-2);
        mid = mid.replace(/\w/gi, '-');
        return wrd.charAt(0) + mid + wrd.charAt(wrd.length-1);
      })
      .join(' ');
    $('#ans').text(str);
  });
});
