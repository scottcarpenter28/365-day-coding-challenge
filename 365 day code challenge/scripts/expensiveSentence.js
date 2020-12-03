var cost;
$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var cost=0;
      $('#str').val().split(' ').map(w => [...w.matchAll(/[A-Z]/g)].length==w.length?
                                          w.split('').forEach(s => cost+= (s.toLowerCase().charCodeAt(0)-96)*2):
                                          [...w.toLowerCase().matchAll(/\w/gi)].forEach(s => cost+= (s.toString().charCodeAt(0)-96)));
      $('#ans').text(cost);
  });
});
