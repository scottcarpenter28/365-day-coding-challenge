$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var radius = Math.abs(parseFloat($('#radius').val()));
    var circ = new circle(radius);
    $('#ans').text("Circle Area: "+circ.area()+' Circle Circumference: '+circ.circumference());
  });
});

class circle{
  constructor(radius){
    this.radius = radius;
  }

  area(){
    return (Math.PI * Math.pow(this.radius,2)).toFixed(2);
  }

  circumference(){
    return (2 * Math.PI * this.radius).toFixed(2);
  }
}
