$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let str = $('#str').val()
      .split(' ')
      .map(fulllWrd =>{
        let index = findIndex(fulllWrd);
        let wrd = makeWord(fulllWrd)
        return {
          "index":index,
          "word":wrd
        };
      })
      .sort(sortLyrics)
      .map(wrd => wrd.word);
    $("#ans").text(str.join(' '));
  });
});

function findIndex(wrd) {
  let reg = /\d+/;
  let num = wrd.match(reg);
  return parseInt(num[0]);
}

function makeWord(wrd){
  let reg = /\D*/g;
  let matches = [...wrd.matchAll(reg)];
  let result = '';
  for(var i=0; i<matches.length; i++)
    result+= matches[i][0];
  return result;
}

function sortLyrics(strA, strB){
  if(strA.index > strB.index)
    return 1;
  return -1;
}
