
const cart = [];

function addToCart(bookId) {
  const book = books.find(item => item.id === bookId);

  if (book) {
    cart.push(book);
    displayCart();
  }
}

function displayCart() {
  const total = cart.reduce(
    (sum, book) => sum + book.price,
    0
  );

  document.getElementById("cart").innerHTML =
    cart.map(book =>
      `<p>${book.title} — ₹${book.price}</p>`
    ).join("") +
    `<strong>Total: ₹${total}</strong>`;
}

console.log("Shopping cart module loaded");
