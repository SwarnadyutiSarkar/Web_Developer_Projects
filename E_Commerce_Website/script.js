let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCartTotal();
}

function updateCartTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.product button');

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const productElement = button.parentElement;
            const productName = productElement.querySelector('h2').textContent;
            const price = parseFloat(productElement.querySelector('p').textContent.slice(1));
            addToCart(productName, price);
        });
    });
});
