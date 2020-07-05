$(document).ready(function() {
  $("#output").click(function() {
    $('#decode').text($('#morseStr').val().split(' ').map(convertMorse).join(' '));
    });
});

function convertMorse(m){
  switch (m) {
    case '.-':
      return 'A'
      break;
    case '-...':
      return 'B'
      break;
    case '-.-.':
      return 'C'
      break;
    case '-..':
      return 'D'
      break;
    case '.':
      return 'E'
      break;
    case '..-.':
      return 'F'
      break;
    case '--.':
      return 'G';
      break;
    case '....':
      return 'H';
      break;
    case '..':
      return 'I';
      break;
    case '.---':
      return 'J';
      break;
    case '-.-':
      return 'K';
      break;
    case '.-..':
      return 'L';
      break;
    case '--':
      return 'M';
      break;
    case '-.':
      return 'N';
      break;
    case '---':
      return 'O';
      break;
    case '.--.':
      return 'P';
      break;
    case '--.-':
      return 'Q';
      break;
    case '.-.':
      return 'R';
      break;
    case '...':
      return 'S';
      break;
    case '-':
      return 'T';
      break;
    case '..-':
      return 'U';
      break;
    case '...-':
      return 'V';
      break;
    case '.--':
      return 'W';
      break;
    case '-..-':
      return 'X';
      break;
    case '-.--':
      return 'Y';
      break;
    case '--..':
      return 'Z';
      break;
    default:
      return '';
  }
}
