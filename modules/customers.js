
const customers = [];

function addCustomer() {
  const input = document.getElementById("customerName");
  const name = input.value.trim();

  if (!name) {
    alert("Please enter a customer name.");
    return;
  }

  customers.push({
    id: customers.length + 1,
    name: name
  });

  input.value = "";

  document.getElementById("customers").innerHTML =
    customers.map(customer =>
      `<p>${customer.id}. ${customer.name}</p>`
    ).join("");
}

console.log("Customer management module loaded");
