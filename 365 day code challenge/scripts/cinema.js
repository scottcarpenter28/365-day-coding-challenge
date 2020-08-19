$(document).ready(function() {
  $("#output").click(function() {
    var card = parseFloat(parseFloat($('#card').val()).toFixed(2));
    var ticket = parseFloat(parseFloat($('#ticket').val()).toFixed(2));
    var percent = parseFloat(parseFloat($('#percent').val()).toFixed(2));

    var movies = 0;
    var ticketF = 0;
    var lowedTicket = ticket;

    while(card>ticketF){
        ticketF += ticket;
        lowedTicket *= percent;
        card += lowedTicket;
        movies++;
    }
    $('#ans').text(movies+' Movies. Card price: '+Math.ceil(card) +" Ticket price: "+Math.ceil(ticketF));
  });
});
