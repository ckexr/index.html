// Shopping Page JavaScript: Calculate Total
function calculateTotal() {
  const product1Qty = document.getElementById('product1-qty').value;
  const product2Qty = document.getElementById('product2-qty').value;

  const product1Total = product1Qty * 100;
  const product2Total = product2Qty * 150;

  document.getElementById('product1-total').textContent = `$${product1Total}`;
  document.getElementById('product2-total').textContent = `$${product2Total}`;

  const totalPrice = product1Total + product2Total;
  document.getElementById('total-price').textContent = totalPrice;
}

// Contact Form Validation
function validateForm() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const comments = document.getElementById('comments').value;

  if (!firstName || !lastName || !comments) {
    alert('Please fill in all fields.');
    return false;
  }
  return true;
}
