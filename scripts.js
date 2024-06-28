let cart = [];

function addToCart(item) {
    cart.push(item);
    console.log(`${item} added to cart.`);
    updateCartUI();
}

function removeFromCart(item) {
    const index = cart.indexOf(item);
    if (index !== -1) {
        cart.splice(index, 1);
        console.log(`${item} removed from cart.`);
        updateCartUI();
    }
}

function updateCartUI() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerText = item;
        cartItemsElement.appendChild(itemElement);
    });

    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.innerText = cart.length;
}

const video = document.getElementById('bg-video');
const muteButton = document.getElementById('mute-button');

muteButton.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        muteButton.innerText = 'Mute';
    } else {
        video.muted = true;
        muteButton.innerText = 'Unmute';
    }
});