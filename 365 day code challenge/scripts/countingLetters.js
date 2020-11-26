var con;
var vow;
$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    con=[];
    vow=[];

    var str=$('#str').val().split(' ').map(count);
    $('#ans').text('Constonants: '+con+' Vowels: '+vow);
  });
});

function count(wrd){
  con.push([...wrd.matchAll(/[bcdfghjklmnpqrstvwxyz]/gi)].length);
  vow.push([...wrd.matchAll(/[aeiou]/gi)].length);
}
