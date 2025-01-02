function updateProductTotal(productNumber) {
  const qtyInput = document.getElementById(`product${productNumber}-qty`);
  const totalCell = document.getElementById(`product${productNumber}-total`);
  let qty = parseInt(qtyInput.value);

  if (isNaN(qty) || qty < 0) {
    qty = 0;
    qtyInput.value = 0;
  }

  const price = productNumber === 1 ? 100 : 150;
  const total = qty * price;

  totalCell.textContent = `$${total}`;

  calculateTotal(); // Call calculateTotal to update overall price
}

function calculateTotal() {
  let product1Qty = parseInt(document.getElementById('product1-qty').value);
  let product2Qty = parseInt(document.getElementById('product2-qty').value);

  if (isNaN(product1Qty) || product1Qty < 0) {
    //Error handling.
    product1Qty = 0;
  }
  if (isNaN(product2Qty) || product2Qty < 0) {
    product2Qty = 0;
  }

  const product1Total = product1Qty * 100;
  const product2Total = product2Qty * 150;

  let totalPrice = product1Total + product2Total;

  if (totalPrice < 200) {
    totalPrice += totalPrice * 0.15;
  } else {
    totalPrice -= totalPrice * 0.15;
  }

  document.getElementById('total-price').textContent = totalPrice;
}

function handleFormSubmit(event) {
  event.preventDefault();

  let product1Qty = parseInt(document.getElementById('product1-qty').value);
  let product2Qty = parseInt(document.getElementById('product2-qty').value);

  if (isNaN(product1Qty) || product1Qty < 0) {
    //Error handling.
    product1Qty = 0;
  }
  if (isNaN(product2Qty) || product2Qty < 0) {
    product2Qty = 0;
  }

  const product1Total = product1Qty * 100;
  const product2Total = product2Qty * 150;

  document.getElementById('product1-total').textContent = `$${product1Total}`;
  document.getElementById('product2-total').textContent = `$${product2Total}`;

  let totalPrice = product1Total + product2Total;

  if (totalPrice < 200) {
    totalPrice += totalPrice * 0.15; // Apply 15% tax
  } else {
    totalPrice -= totalPrice * 0.15; // Apply 15% discount
  }

  if (
    confirm(
      `Your total is $${totalPrice}. Do you accept this amount for payment?`
    )
  ) {
    alert('Thank you for your purchase!');
  } else {
    alert('Transaction cancelled.');
  }
}

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
