$(document).ready(function() {
  $("#output").click(function() {
    var messages =['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    $('#ans').text(messages[Math.abs(parseInt($('#num').val()))%(messages.length-1)])
  });
});
