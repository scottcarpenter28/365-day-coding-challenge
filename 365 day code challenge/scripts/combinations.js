$(document).ready(function() {
  $("#output").click(function() {
    var nums = $("#nums").val().split(', ').map(val => parseInt(val)).map(val => val ==0? 1: val);
    var permutations=1;
    nums.forEach(i => permutations*=i);
    $('#ans').text(permutations);
  });
});
