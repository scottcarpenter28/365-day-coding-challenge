$(document).ready(function() {
  $("#output").click(function() {
    ($('#works').val() == "True" && $('#vacation').val()== "False") ?$('#ans').text("Set your alarm!"):  $('#ans').text("No need to set your alarm.")
  });
});
