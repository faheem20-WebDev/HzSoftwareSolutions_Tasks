const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryItems = document.querySelectorAll('.gallery-item');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentIndex = 0;
let visibleItems = [];

// Initialize visible items
updateVisibleItems();

function updateVisibleItems() {
    visibleItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
}

function openLightbox(index) {
    // index is the index in the full list (from HTML onclick)
    // We need to find this item's index in the *visible* list
    const clickedItem = galleryItems[index];
    
    // Update visible items list just in case
    updateVisibleItems();
    
    // Find index in visible list
    currentIndex = visibleItems.indexOf(clickedItem);
    
    if (currentIndex !== -1) {
        lightbox.style.display = 'flex';
        // Small delay to allow display:flex to apply before opacity transition
        setTimeout(() => lightbox.classList.add('show'), 10);
        updateLightboxImage();
    }
}

function closeLightbox() {
    lightbox.classList.remove('show');
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300); // Match transition duration
}

function changeImage(direction) {
    currentIndex += direction;
    
    if (currentIndex >= visibleItems.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = visibleItems.length - 1;
    }
    
    updateLightboxImage();
}

function updateLightboxImage() {
    const item = visibleItems[currentIndex];
    const img = item.querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
}

function filterGallery(category) {
    // Update active button state
    filterBtns.forEach(btn => {
        if (btn.textContent.toLowerCase() === category || (category === 'all' && btn.textContent === 'All')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Filter items
    galleryItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
    // Update the list of visible items for the lightbox
    updateVisibleItems();
}

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowLeft') changeImage(-1);
        if (e.key === 'ArrowRight') changeImage(1);
        if (e.key === 'Escape') closeLightbox();
    }
});