// Модальное окно с каруселью
let currentProduct = null;
let currentImageIndex = 0;

function openModal(product) {
    currentProduct = product;
    currentImageIndex = 0;
    document.getElementById('modalName').innerHTML = `${product.icon || ''} ${product.name}`;
    document.getElementById('modalRarity').textContent = product.rarity;
    document.getElementById('modalRarity').style.background = getRarityColor(product.rarity);
    document.getElementById('modalHero').textContent = product.hero;
    document.getElementById('modalDescription').textContent = product.fullDescription;
    document.getElementById('modalPrice').innerHTML = formatPrice(product.price);
    updateCarousel();
    document.getElementById('modalOverlay').classList.add('active');
}

function updateCarousel() {
    if (!currentProduct) return;
    const mainImg = document.getElementById('modalImage');
    const thumbsContainer = document.getElementById('thumbnails');
    const images = currentProduct.images;
    if (images && images.length > 0) {
        mainImg.src = images[currentImageIndex] || currentProduct.image;
        thumbsContainer.innerHTML = '';
        images.forEach((img, idx) => {
            const thumb = document.createElement('img');
            thumb.src = img;
            thumb.className = 'thumbnail' + (idx === currentImageIndex ? ' active' : '');
            thumb.onclick = () => { currentImageIndex = idx; updateCarousel(); };
            thumbsContainer.appendChild(thumb);
        });
    } else {
        mainImg.src = currentProduct.image;
    }
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    currentProduct = null;
}

// Закрытие по ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('modalOverlay').classList.contains('active')) {
        closeModal();
    }
});