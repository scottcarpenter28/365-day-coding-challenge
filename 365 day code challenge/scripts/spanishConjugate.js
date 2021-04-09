const endings = {
  'ar':['o','as','a','amaos','ais','an'],
  'er':['o','es','e','emos','eis','en'],
  'ir':['o','es','e','imos','is','en']
}

$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let verb = $('#wrd').val();
    let last = verb.substr(verb.length-2);
    let result = ["No Ending found"];
    if( last in endings)
      result = endings[last].map(end => verb.substr(0,verb.length-2)+end);
    $('#ans').text(result.join(', '));
  });
});
