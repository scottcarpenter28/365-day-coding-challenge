const hours = {
  0:'Midnight',
  1:'one',
  13:'one',
  2:'two',
  14:'two',
  3:'three',
  15:'three',
  4:'four',
  16:'four',
  5:'five',
  17:'five',
  6:'six',
  18:'six',
  7:'seven',
  19:'seven',
  8:'eight',
  20:'eight',
  9:'nine',
  21:'nine',
  10:'ten',
  22:'ten',
  11:'eleven',
  23:'eleven',
  12:'twelve'
};

$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    var time = $('#time').val().split(':').map(n => parseInt(n))
    var timeString = hours[time[0]];
    var minute = time[1];

    if(minute == 0)
      timeString += "Oclock";
    else{
      if(minute == 15)
        timeString = "quarter after "+timeString;
      else if(minute == 30)
        timeString = "half past "+timeString;
      else if(minute == 45)
        timeString = "quarter to "+hours[time[0]+1];
      else if(minute < 30)
        timeString = convertMinutes(minute) +' past '+timeString;
      else
        timeString = convertMinutes(60-minute) +' before '+hours[time[0]+1];

    }

    $('#ans').text(timeString);
  });
});

function convertMinutes(minutes){
  const SINGLE = {
    1:'One',
    2:'Two',
    3:'Three',
    4:'Four',
    5:'Five',
    6:'Six',
    7:'Seven',
    8:'Eight',
    9:'Nine'
  };
  const TEEN = {
    10:'Ten',
    11:'Eleven',
    12:'Twelve',
    13:'Thirteen',
    14:'Fourteen',
    15:'Fifteen',
    16:'Sixteen',
    17:'Seventeen',
    18:'Eighteen',
    19:'Nineteen'
  };
  const LARGE = {
    2:'Twenty',
    3:'Thirty',
    4:'Fourty',
    5:'Fifty'
  };

  var result = ''
  var ones = minutes % 10;
  var tens = Math.floor(minutes/10)

  if(minutes in TEEN)
    return TEEN[minutes]

  if(ones in SINGLE)
    result = SINGLE[ones];
  if(tens in LARGE)
    result = LARGE[tens]+' '+result;

  return result
}
