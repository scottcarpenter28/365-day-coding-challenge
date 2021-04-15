$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let check = $('#nums')
      .val()
      .split(", ")
      .map(num => parseInt(num))
      .every((num, i, arr) =>{
        let sum = Number.MIN_VALUE;

        if(i != 0)
          sum = arr.slice(0,i).reduce((acc,num) => acc + num);

        return sum < num;
      });
    $('#ans').text(check);
  });
});
