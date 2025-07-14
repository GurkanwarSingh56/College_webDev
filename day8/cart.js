// Get cart data from localStorage
function getCartData() {
    return JSON.parse(localStorage.getItem("cartData")) || [];
}

// Display cart items
function displayCartItems() {
    const cartItems = getCartData();
    const cartContainer = document.getElementById("cartItems");
    const totalItemsElement = document.getElementById("totalItems");
    const totalPriceElement = document.getElementById("totalPrice");
    
    // Clear existing content
    cartContainer.innerHTML = "";
    
    if (cartItems.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <h2>Your cart is empty</h2>
                <p>Add some products to your cart to see them here.</p>
                <button onclick="window.location.href='index.html'" class="continue-shopping">Continue Shopping</button>
            </div>
        `;
        totalItemsElement.textContent = "Total Items: 0";
        totalPriceElement.textContent = "Total Price: ₹0";
        return;
    }
    
    let totalPrice = 0;
    
    cartItems.forEach((item, index) => {
        totalPrice += parseFloat(item.price);
        
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${item.title}</h3>
                <p class="cart-item-category">${item.category}</p>
                <p class="cart-item-price">₹${item.price}</p>
                <p class="cart-item-rating">Rating: ${item.rating.rate} ⭐</p>
            </div>
            <div class="cart-item-actions">
                <button onclick="removeFromCart(${index})" class="remove-btn">Remove</button>
            </div>
        `;
        
        cartContainer.appendChild(cartItem);
    });
    
    // Update summary
    totalItemsElement.textContent = `Total Items: ${cartItems.length}`;
    totalPriceElement.textContent = `Total Price: ₹${totalPrice.toFixed(2)}`;
}

// Remove item from cart
function removeFromCart(index) {
    let cartItems = getCartData();
    cartItems.splice(index, 1);
    localStorage.setItem("cartData", JSON.stringify(cartItems));
    displayCartItems(); // Refresh the display
}

// Clear entire cart
function clearCart() {
    if (confirm("Are you sure you want to clear your cart?")) {
        localStorage.removeItem("cartData");
        displayCartItems();
    }
}

// Checkout function
function checkout() {
    const cartItems = getCartData();
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    alert(`Thank you for your purchase! Total items: ${cartItems.length}`);
    localStorage.removeItem("cartData");
    displayCartItems();
}

// Initialize cart page
document.addEventListener("DOMContentLoaded", function() {
    displayCartItems();
    
    // Add event listeners
    document.getElementById("clearCartBtn").addEventListener("click", clearCart);
    document.getElementById("checkoutBtn").addEventListener("click", checkout);
});