$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let isbn = $('#isbn').val().split('');
    let sum = 0;

    isbn.map((cur,index) =>{
      index += 1;
      if(cur == 'x' || cur =='X')
        sum += (10*index);
      else{
        cur = parseInt(cur);
        sum += (cur*index);
      }
    });

    let msg ='Vailed'
    if(sum%11 != 0 || isbn.toString().length < 10)
      msg = 'Invalid'
    $('#ans').text(msg);

  });
});
