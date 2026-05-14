// Get DOM elements
const galleryGrid = document.getElementById('galleryGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInputs = {
    name: document.getElementById('searchName'),
    age: document.getElementById('searchAge'),
    gender: document.getElementById('searchGender'),
    origin: document.getElementById('searchOrigin')
};
const resetBtn = document.getElementById('resetFilters');
const contactForm = document.getElementById('contactForm');
const navLinks = document.querySelectorAll('.nav-menu a');

let currentFilter = 'todos';

// Initialize gallery
function initGallery() {
    renderGallery(talents);
}

// Render gallery cards
function renderGallery(data) {
    galleryGrid.innerHTML = '';

    if (data.length === 0) {
        galleryGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No se encontraron resultados</p>';
        return;
    }

    data.forEach(talent => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
            <div class="gallery-image">
                <i class="fas fa-user-circle"></i>
            </div>
            <div class="gallery-info">
                <div class="gallery-name">${talent.name}</div>
                <div class="gallery-meta"><strong>Edad:</strong> ${talent.age} años</div>
                <div class="gallery-meta"><strong>Origen:</strong> ${talent.origin.charAt(0).toUpperCase() + talent.origin.slice(1)}</div>
                <div class="gallery-category">${getCategoryLabel(talent.category)}</div>
                <a href="talent.html?id=${talent.id}">Ver Perfil</a>
            </div>
        `;
        galleryGrid.appendChild(card);
    });
}

// Get category label
function getCategoryLabel(category) {
    const labels = {
        'actor': 'Actor',
        'actriz': 'Actriz',
        'cara-nueva': 'Cara Nueva',
        'infantil': 'Infantil',
        'internacional': 'Internacional'
    };
    return labels[category] || category;
}

// Filter by category
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        applyFilters();
    });
});

// Apply all filters
function applyFilters() {
    let filtered = talents;

    // Category filter
    if (currentFilter !== 'todos') {
        filtered = filtered.filter(t => t.category === currentFilter);
    }

    // Name/keyword filter
    const nameQuery = searchInputs.name.value.toLowerCase();
    if (nameQuery) {
        filtered = filtered.filter(t => 
            t.name.toLowerCase().includes(nameQuery) ||
            t.skills.some(skill => skill.toLowerCase().includes(nameQuery)) ||
            t.description.toLowerCase().includes(nameQuery)
        );
    }

    // Age filter
    const ageRange = searchInputs.age.value;
    if (ageRange) {
        filtered = filtered.filter(t => {
            if (ageRange === '18-25') return t.age >= 18 && t.age <= 25;
            if (ageRange === '26-35') return t.age >= 26 && t.age <= 35;
            if (ageRange === '36-45') return t.age >= 36 && t.age <= 45;
            if (ageRange === '46+') return t.age > 45;
            return true;
        });
    }

    // Gender filter
    const gender = searchInputs.gender.value;
    if (gender) {
        filtered = filtered.filter(t => t.gender === gender);
    }

    // Origin filter
    const origin = searchInputs.origin.value;
    if (origin) {
        filtered = filtered.filter(t => t.origin === origin);
    }

    renderGallery(filtered);
}

// Reset filters
resetBtn.addEventListener('click', () => {
    searchInputs.name.value = '';
    searchInputs.age.value = '';
    searchInputs.gender.value = '';
    searchInputs.origin.value = '';
    filterBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-filter="todos"]').classList.add('active');
    currentFilter = 'todos';
    renderGallery(talents);
});

// Search input listeners
Object.values(searchInputs).forEach(input => {
    input.addEventListener('change', applyFilters);
    input.addEventListener('input', applyFilters);
});

// Contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    contactForm.reset();
});

// Smooth scroll for navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initGallery);