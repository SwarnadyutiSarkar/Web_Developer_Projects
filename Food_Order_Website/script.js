// Sample menu items
const menuItems = [
    { id: 1, name: 'Chocolate Cake', price: 30 },
    { id: 2, name: 'Vanilla Cake', price: 25 },
    { id: 3, name: 'Strawberry Cake', price: 28 },
];

// Sample cart items
let cartItems = [];

// Display menu items
const menuContainer = document.querySelector('.menu .menu-items');
menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
        <button onclick="addToCart(${item.id})">Add to Cart</button>
    `;
    menuContainer.appendChild(menuItem);
});

// Add item to cart
function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    if (item) {
        cartItems.push(item);
        updateCart();
    }
}

// Update cart
function updateCart() {
    const cartContainer = document.querySelector('.cart .cart-items');
    cartContainer.innerHTML = '';
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Checkout
document.getElementById('checkout').addEventListener('click', () => {
    alert('Checkout successful!');
    cartItems = [];
    updateCart();
});
