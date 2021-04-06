$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let letters = $('#letters').val()
      .toLowerCase()
      .split('')
      .sort()
      .map(c => c.charCodeAt(0))
      .every((c, i, arr) => i === 0 || arr[i] - arr[i - 1] === 1);

    $('#ans').text(letters);
  });
});
