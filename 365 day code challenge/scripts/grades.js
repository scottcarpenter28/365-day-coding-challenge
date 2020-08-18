$(document).ready(function() {
  $("#output").click(function() {
    $('#ans').text(setScore(calcAverage($('#grades').val().split(' '))));
  });
});

function calcAverage(grades){
  var average = 0;
  for(var i=0; i< grades.length; i++)
    average += parseInt(grades[i]);
  return (average /=grades.length).toFixed(1);
}

function setScore(average){
  if(average > 95)
    return "A+ : "+average;
  else if(average > 90)
    return "A- : "+average;
  else if(average > 85)
    return "B+ : "+average;
  else if(average > 80)
    return "B- : "+average;
  else if(average > 75)
    return "C+ : "+average;
  else if(average > 70)
    return "C- : "+average;
  else if(average > 65)
    return "D+ : "+average;
  else if(average > 60)
    return "D- : "+average;
  else
    return "F : "+average;
}
