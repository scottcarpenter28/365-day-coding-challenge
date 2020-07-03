$(document).ready(function() {
  $("#eq").click(function() {
    var sec = parseInt($('#num').val());
    var temp;
    var ans = '';

    // Seconds =0;
    if (sec === 0) {
      ans = "Time is now";
    }

    //Years
    if (sec >= 31536000) {
      temp = Math.floor(sec / 31536000)
      sec -= temp * 31536000;
      ans += temp + " years ";
    }

    //Days
    if (sec >= 86400) {
      temp = Math.floor(sec / 86400);
      sec -= temp * 86400;
      ans += temp + " days ";
    }

    //Hours
    if (sec >= 3600) {
      temp = Math.floor(sec / 3600);
      sec -= temp * 3600;
      ans += temp + " hours ";
    }

    //Mins
    if (sec >= 60) {
      temp = Math.floor(sec / 60);
      sec -= temp * 60;
      min + " mins ";
    }

    //Seconds
    if (sec > 0)
      ans += sec + " seconds."

    $('#ans').text(ans);
  });
});
