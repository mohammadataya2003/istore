
function addToCart(productName, price) {

  var quantityInput = event.target.previousElementSibling;
  var quantity = parseInt(quantityInput.value);
  if (!isNaN(quantity) && quantity > 0) {
    var cartItems = document.getElementById("cart-items");
    var cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.classList.add("d-flex");
    cartItem.classList.add("justify-content-between");
    cartItem.classList.add("my-2");
    cartItem.textContent = productName + " - $" + price + " x " + quantity;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      cartItems.removeChild(cartItem);
      updateTotalAmount();
    };
    cartItem.appendChild(deleteButton);

    cartItems.appendChild(cartItem);
    updateTotalAmount();

    quantityInput.value = 0;
    Swal.fire(
      'Success!',
      'Items added to cart!',
      'success'
    )
  }

}

function updateTotalAmount() {
  var cartItems = document.getElementById("cart-items");
  var totalAmount = document.getElementById("total-amount");
  var items = cartItems.getElementsByClassName("cart-item");
  var total = 0;

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var price = parseFloat(item.textContent.substring(item.textContent.lastIndexOf("$") + 1));
    var quantity = parseInt(item.textContent.substring(item.textContent.lastIndexOf("x") + 2));
    total += price * quantity;
  }

  totalAmount.textContent = "Total:  $" + total;
}

function clearCart() {
  var cartItems = document.getElementById("cart-items");
  while (cartItems.firstChild) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateTotalAmount();
}