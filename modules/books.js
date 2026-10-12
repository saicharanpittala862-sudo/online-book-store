
const books = [
  { id: 1, title: "Java Programming", price: 450 },
  { id: 2, title: "Python Basics", price: 350 },
  { id: 3, title: "Web Development", price: 500 }
];

function displayBooks(list = books) {
  document.getElementById("books").innerHTML =
    list.map(book => `
      <div class="book">
        <h3>${book.title}</h3>
        <p>Price: ₹${book.price}</p>
        <button onclick="addToCart(${book.id})">
          Add to Cart
        </button>
      </div>
    `).join("");
}

console.log("Book display module loaded");
