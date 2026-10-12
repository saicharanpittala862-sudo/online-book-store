
function searchBooks() {
  const query = document
    .getElementById("search")
    .value
    .trim()
    .toLowerCase();

  const results = books.filter(book =>
    book.title.toLowerCase().includes(query)
  );

  displayBooks(results);
}

console.log("Book search module loaded");
