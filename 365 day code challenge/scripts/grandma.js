$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var friendsArr = [];
    var friends = $('#friends').val();
    var miles = 0;
    for(var i=0; i<friends; i++){
      var r = Math.floor(Math.random()*250)
      miles += (r*2);
      friendsArr.push([i+1, r]);
    }
    console.log(friendsArr);
    $('#miles').text('Grandma will be traveling '+ miles +' miles!');
  });
});
