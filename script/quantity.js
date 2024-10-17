$(document).ready(function() {
    // Get the quantity input element
    var quantityInput = $('#quantity');
  
    // Get the minus and plus buttons
    var minusButton = $('.quantity-button.minus');
    var plusButton = $('.quantity-button.plus');
  
    // Set the initial quantity value
    var quantity = parseInt(quantityInput.val());
  
    // When the minus button is clicked, decrease the quantity by 1
    minusButton.click(function() {
      if (quantity > 1) {
        quantity--;
        quantityInput.val(quantity);
      }
    });
  
    // When the plus button is clicked, increase the quantity by 1
    plusButton.click(function() {
      if (quantity < 99) {
        quantity++;
        quantityInput.val(quantity);
      }
    });
  });

  const minusButton = document.querySelector('.minus1');
  const plusButton = document.querySelector('.plus1');
  const quantityInput = document.querySelector('#quantity1');

  minusButton.addEventListener('click', function() {
    if (quantityInput.value > 1) {
      quantityInput.value--;
    }
  });

  plusButton.addEventListener('click', function() {
    quantityInput.value++;
  });
  