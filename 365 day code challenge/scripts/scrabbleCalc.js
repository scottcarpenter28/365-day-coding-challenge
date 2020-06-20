$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var points = 0;
    var s= $('#string').val();

    //Gets points
    for(var i=0; i< s.length; i++){
      if(s.indexOf('*')!=-1 && (i+1)==s.indexOf('*'))
        points += 2*(getPoint(s.charAt(i)));
      else if(s.indexOf('**')!=-1 && (i+1)==s.indexOf('**'))
        points += 3*(getPoint(s.charAt(i)));
      else
        points += getPoint(s.charAt(i));
    }

    //Bonus points
    if(s.endsWith('(d)'))
      points*=2;
    else if(s.endsWith('(t)'))
      points*=3;
    else if(s.indexOf('^')!=-1)
      points=0;

    $('#points').text(points);
  });
});

function getPoint(c) {
  var p=0;
  switch (c.toLowerCase()) {
    case 'a': case 'e': case 'i': case 'l': case 'n': case 'r': case 'u': case 'o': case 's': case 't':
      p= 1;
      break;
    case 'd':
      p= 2;
      break
    case 'b': case 'c': case 'm': case 'p':
      p= 3;
      break
    case 'f': case 'h': case 'v': case 'y':
      p= 4;
      break
    case 'k':
      p= 5;
      break
    case 'j': case 'x':
      p= 8;
      break
    case 'q': case 'z':
      p= 10;
      break
    default:
      p= 0;
  }
  return p;
}

// 4ft5.5in
// 5ft 3in
//1/4 thick
// 8.5x48
