$(document).ready(function() {
  // Get value on button click and show alert
  $("#output").click(function() {
    let books = $('#books').val();
    books = JSON.parse(books).books;
    books = books.map(book =>{
      let str = book[0];
      return str.split('-');
    });
    console.table(books);
  });
});
