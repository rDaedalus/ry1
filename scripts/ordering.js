

//Function to create HTML for each product
function createProductHTML(product){
  return`
  <div class="order-container">
    <div class="order-image-container">
      <img class="order-image" src="${product.image}" />
    </div>
    <div class="order-name limit-text-to-2-lines">
      <h4>${product.name}</h4>
    </div>
    <div class="order-price">₱ ${product.pricePeso}</div>
  </div>`;
}

//Function to attach event listeners to buttons
function attachEventListeners(products, gridSelector){
  const grid = document.querySelector(gridSelector);
  products.forEach((product, index) => {
    const button = document.createElement('button');
    const productHTML = createProductHTML(product);
    button.innerHTML = productHTML;
    button.addEventListener('click', () => displayProduct(product));
    grid.appendChild(button);
  });
}

//Close popup when close button is clicked
attachEventListeners(silog, '.js-orders-grid');
attachEventListeners(snacks, '.js-orders-grid-1');
attachEventListeners(beverages, '.js-orders-grid-2');
attachEventListeners(milktea, '.js-orders-grid-3');
attachEventListeners(frappucino, '.js-orders-grid-4');
attachEventListeners(mango, '.js-orders-grid-5');
attachEventListeners(latte, '.js-orders-grid-6');
attachEventListeners(milkshake, '.js-orders-grid-7');
attachEventListeners(creamy, '.js-orders-grid-8');
attachEventListeners(americano, '.js-orders-grid-9');


//Close popup when close button is clicked
const closeButton = document.getElementById('closePopup');
closeButton.addEventListener('click', () => {
  const popup = document.getElementById('myPopup');
  popup.style.display = 'none'; //Hide the popup
});

//Close popup when clicking outsisde of it
window.addEventListener('click', (event) =>{
  const popup = document.getElementById('myPopup');
  if (event.target === popup){
    popup.style.display = 'none'; //Hide the popup
  }
});

const decreaseButton = document.querySelector('.decrease');
const increaseButton = document.querySelector('.increse');
const quantityInput = document.getElementById('.quantity');

decreaseButton.addEventListener('click', () =>{
  let currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1){
    quantityInput.value = currentQuantity - 1;
  }
});

increaseButton.addEventListener('click', () => {
  let currentQuantity = parseint(quantityInput.value);
  quantityInput.value = currentQuantity + 1;
})

