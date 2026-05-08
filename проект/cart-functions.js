// Функции корзины (без объявления переменной cart!)
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `✅ ${message}`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function addToCart(productId, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        cart.push({ name: name, price: price, quantity: 1, id: productId });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    showToast(`${name} добавлен в корзину!`);
}

function getRarityColor(rarity) {
    const colors = { 'Arcana': '#ff3b3b', 'Immortal': '#ff8c00', 'Legendary': '#ffd700', 'Mythical': '#c586c0' };
    return colors[rarity] || '#94a3b8';
}

function formatPrice(price) {
    return price.toLocaleString('ru-RU') + ' ₽';
}