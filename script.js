document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.querySelectorAll(".cart-item");
  const subtotalEl = document.querySelector(".cart-summary p:nth-of-type(1)");
  const totalEl = document.querySelector(".cart-summary h4");
  const shippingCost = 50;

  function updateCartTotal() {
    let subtotal = 0;

    cartItems.forEach(item => {
      const priceText = item.querySelector("p").textContent;
      const price = parseInt(priceText.replace(/[^\d]/g, ""));
      const quantity = parseInt(item.querySelector("input").value);
      subtotal += price * quantity;
    });

    subtotalEl.textContent = 'Subtotal:₹{subtotal}';
    totalEl.textContent = 'Total: ₹{subtotal + shippingCost}';
  }

  cartItems.forEach(item => {
    const quantityInput = item.querySelector("input");
    quantityInput.addEventListener("change", () => {
      if (quantityInput.value < 1) quantityInput.value = 1;
      updateCartTotal();
    });
  });

  updateCartTotal(); // Initial call
});