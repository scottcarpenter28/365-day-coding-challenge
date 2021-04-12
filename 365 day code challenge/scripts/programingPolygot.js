const languageMap = {
  "C#": 1,
  "C++": 2,
  "Java": 4,
  "JavaScript": 8,
  "PHP": 16,
  "Python": 32,
  "Ruby": 64,
  "Swift": 128
}

$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let score = $('#langs').val()
      .split(', ')
      .map(lang => languageMap[lang])
      .reduce((num,acc) => num + acc)
    $('#ans').text(score);
  });
});
