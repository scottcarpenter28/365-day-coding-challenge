$(document).ready(function() {
  $("#output").click(function() {
    var year = $('#year').val();

    var i = parseInt(year)+1;
    while(!testYear(i.toString()) && i<10000)
      i++;

    $('#ans').text(i);
  });
});

function testYear(i){
  var test = true;
  var year = i.split('');

  for(var k=0; k<year.length;k++){
    console.log('First: '+year.indexOf(i[k]) +' Last: '+year.lastIndexOf(i[k]));
    if(year.indexOf(i[k]) != year.lastIndexOf(i[k]))
      return false;
  }
  return test;
}
