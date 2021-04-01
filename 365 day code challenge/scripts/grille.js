$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let wrd = $('#wrd').val().split("");
    let num = parseInt($('#num').val());
    let sum = 0;
    let bin = [];

    for(var i = 32; i >= 0; i--){
      if(Math.pow(2,i)+sum <= num){
        bin.push(1);
        sum += Math.pow(2,i)
      }
      else
        bin.push(0)
    }
    bin = bin.slice(bin.length -  wrd.length);

    for(var i = 0; i< wrd.length; i++){
      if(bin[i] == 0)
        wrd[i] = ''
    }

    $('#ans').text(wrd.join(""))
  });
});
