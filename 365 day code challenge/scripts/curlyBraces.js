$(document).ready(function() {
  $("#output").click(function() {
    if($('#braces').val().match(/{/g) != null && $('#braces').val().match(/}/g) != null)
      $('#ans').text($('#braces').val().match(/{/g).length === $('#braces').val().match(/}/g).length?"True":"False");
    else if($('#braces').val().match(/{/g) == $('#braces').val().match(/}/g))
      $('#ans').text("True");
    else
      $('#ans').text("False");
  });
});
