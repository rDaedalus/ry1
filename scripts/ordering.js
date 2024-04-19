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
attachEventListeners(fruit, '.js-orders-grid-4');
attachEventListeners(frappucino, '.js-orders-grid-5');
attachEventListeners(mango, '.js-orders-grid-6');
attachEventListeners(latte, '.js-orders-grid-7');
attachEventListeners(milkshake, '.js-orders-grid-8');
attachEventListeners(creamy, '.js-orders-grid-9');
attachEventListeners(americano, '.js-orders-grid-10');

//Close popup when close button is clicked
const closeButton = document.getElementById('closePopup');
closeButton.addEventListener('click', () => {
  const popup = document.getElementById('myPopup');
  popup.style.display = 'none'; //Hide the popup
  quantityInput.value = 1;
});

//Close popup when clicking outsisde of it
window.addEventListener('click', (event) =>{
  const popup = document.getElementById('myPopup');
  if (event.target === popup){
    popup.style.display = 'none'; //Hide the popup
    quantityInput.value = 1;
  }
});

// Function to calculate the price based on quantity and product price
function calculatePrice(quantity) {
  // Get the product price from the .popup-box .order-price element
  const orderPriceElement = document.querySelector('.popup-box .order-price');
  const productPriceText = orderPriceElement.textContent.trim().replace('₱', ''); // Get the text content and remove '₱' symbol
  const productPrice = parseFloat(productPriceText); // Convert the text content to a floating-point number

  // Calculate the total price based on quantity and product price
  return productPrice * quantity;
}



// Function to update the order price in the popup
function updateOrderPrice() {
  const quantityInput = document.getElementById('quantity');
  const orderPrice = document.querySelector('.popup-box .order-price');

  // Get the current quantity from the input
  let currentQuantity = parseInt(quantityInput.value);

  // Calculate the product price from the order-price element
  const productPriceText = orderPrice.textContent.trim().replace('₱', '');
  const productPrice = parseFloat(productPriceText);

  // Calculate the total price based on the current quantity
  const totalPrice = productPrice * currentQuantity;

  // Update the order price in the popup
  orderPrice.textContent = `₱ ${totalPrice.toFixed(2)}`;
}

function updateOrderPriceSubtract() {
  const quantityInput = document.getElementById('quantity');
  const orderPrice = document.querySelector('.popup-box .order-price');

  // Get the current quantity from the input
  let currentQuantity = parseInt(quantityInput.value);

  // Calculate the product price from the order-price element
  const productPriceText = orderPrice.textContent.trim().replace('₱', '');
  const productPrice = parseFloat(productPriceText);

  // Calculate the total price based on subtracting the current quantity from the product price
  const totalPrice = productPrice - currentQuantity;

  // Update the order price in the popup
  orderPrice.textContent = `₱ ${totalPrice.toFixed(2)}`;
}

// Add event listeners for the decrease and increase buttons
const decreaseButton = document.querySelector('.decrease');
const increaseButton = document.querySelector('.increase');
const quantityInput = document.getElementById('quantity');

decreaseButton.addEventListener('click', () => {
  let currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1 ) {
      quantityInput.value = currentQuantity - 1;
      updateOrderPriceSubtract(); // Update the order price when quantity decreases
  }
});

increaseButton.addEventListener('click', () => {
  let currentQuantity = parseInt(quantityInput.value);
  quantityInput.value = currentQuantity + 1;
  updateOrderPrice(); // Update the order price when quantity increases
});

function getProductData() {
  // Extract product data from the popup content
  const productNameElement = document.querySelector(".popup-content h4");
  const productImageElement = document.querySelector(".popup-content img");
  const productPriceElement = document.querySelector(".popup-box .order-price");

  // Check if elements are found before accessing their properties
  const productName = productNameElement ? productNameElement.innerText : "";
  const productImage = productImageElement ? productImageElement.getAttribute("src") : "";
  const productPriceText = productPriceElement ? productPriceElement.textContent.trim().replace('₱', '') : "0"; // Default price to "0" if element is not found
  const productPrice = parseFloat(productPriceText);

  // Create an object containing the product data
  const product = {
    name: productName,
    image: productImage,
    price: productPrice
  };
  console.log("productName:", productName);
  console.log("productImage:", productImage);
  console.log("productPrice:", productPrice);
  return product;
  
}

function displayProduct(product) {
  const popupContent = document.querySelector(".popup-content");
  // Assuming createProductHTML is defined elsewhere to create HTML for the product
  popupContent.innerHTML = createProductHTML(product);

  const popup = document.getElementById("myPopup");
  popup.style.display = "block";

  // Check if the order category to show the calculator
  if (
    product.category === "milktea" ||
    product.category === "americano" ||
    product.category === "milkshake" ||
    product.category === "mango" ||
    product.category === "latte"
  ) {
    document.getElementById("calculator").style.display = "flex";
    document.getElementById("size-order").style.display = "flex";
  } else {
    document.getElementById("calculator").style.display = "none";
    document.getElementById("size-order").style.display = "none";
  }

  if (product.category === "fruit") {
    document.getElementById("size-order").style.display = "flex";
  }

  if (
    product.category === "frappucino" ||
    product.category === "creamy"
  ) {
    document.getElementById("calculator").style.display = "flex";
  }
}


function fetchAndDisplayData(product) {
// Fetch data from the calculator and size order elements
//const sugarPercentageElement = document.getElementById("sugarPercentage");
//const sugarPercentage = sugarPercentageElement ? sugarPercentageElement.value : 0;

//const sizeButtons = document.querySelectorAll(".size-order button");
//const selectedSizeButton = Array.from(sizeButtons).find(button => button.classList.contains("selected"));
//const size = selectedSizeButton ? selectedSizeButton.textContent.trim() : "";

// Prepare the HTML content
//const sugarHTML = `<p>Sugar Percentage: ${sugarPercentage * 100}%</p>`;
//const sizeHTML = `<p>Size: ${size}</p>`;
const totalHTML = `<p>Total: ${product.price}</p>`; // Assuming there's a function to calculate the total price
const imageHTML = `<img src="${product.image}" alt="${product.name}" />`;
const nameHTML = `<p>Name: ${product.name}</p>`;

//const orderHTML = `${imageHTML}${nameHTML}${sugarHTML}${sizeHTML}${totalHTML}`;
const orderHTML = `${imageHTML}${nameHTML}${totalHTML}`;
return orderHTML;
}



// Attach event listener to the "Add" button
const addButton = document.querySelector(".popup-box-total button");
addButton.addEventListener("click", () => {
console.log("Add button clicked!");
// Fetch data and prepare HTML
const product = getProductData();
const orderHTML = fetchAndDisplayData(product);

// Append the order HTML to the my-order-list
const myOrderListContainer = document.querySelector(".my-order-list");
myOrderListContainer.insertAdjacentHTML("beforeend", orderHTML);

// Show the my-order-list-container
const myOrderListContainerParent = document.querySelector(".my-order-list-container");
myOrderListContainerParent.style.display = "block";
});