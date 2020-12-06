$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
      var filtered =[];
      var nums = $('#num').val().split(', ').map(n => parseInt(n)).filter(n => n>0 && n<10).forEach(n => !filtered.includes(n)? filtered.push(n):'');
      $('#ans').text(filtered.sort().join(''));
  });
});
