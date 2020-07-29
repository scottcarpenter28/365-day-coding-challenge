var names =[];
$(document).ready(function() {
  $("#output").click(function() {
    names.unshift($('#name').val());
    if(names.length==1)
      $('#after').text(names[0]+" likes the post");
    else if(names.length==2)
      $('#after').text(names[0]+", "+names[1]+" likes the post");
    else if(names.length==3)
      $('#after').text(names[0]+", "+names[1]+ " and "+names[2]+" likes the post");
    else if ($('#after').text(names[0]+", "+names[1]+ " and "+(names.length-2)+" others likes the post"));
  });
});
