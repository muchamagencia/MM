// Get talent ID from URL
const urlParams = new URLSearchParams(window.location.search);
const talentId = parseInt(urlParams.get('id'));

// Find talent data
const talent = talents.find(t => t.id === talentId);

// If talent not found, redirect to home
if (!talent) {
    window.location.href = 'index.html';
}

// Populate page with talent data
function populateTalentPage() {
    document.getElementById('talentName').textContent = talent.name;
    document.getElementById('talentFormName').textContent = talent.name;
    
    const categoryLabel = {
        'actor': 'Actor',
        'actriz': 'Actriz',
        'cara-nueva': 'Cara Nueva',
        'infantil': 'Infantil',
        'internacional': 'Internacional'
    }[talent.category];
    document.getElementById('talentCategory').textContent = categoryLabel;
    document.title = talent.name + ' - Mucha Magia';
    
    document.getElementById('talentAge').textContent = talent.age;
    
    const genderLabel = {
        'masculino': 'Masculino',
        'femenino': 'Femenino',
        'otro': 'Otro'
    }[talent.gender];
    document.getElementById('talentGender').textContent = genderLabel;
    
    const originLabel = {
        'españa': 'España',
        'latinoamérica': 'Latinoamérica',
        'europa': 'Europa',
        'internacional': 'Internacional'
    }[talent.origin];
    document.getElementById('talentOrigin').textContent = originLabel;
    
    document.getElementById('talentDescription').textContent = talent.description;
    
    // Populate skills
    const skillsContainer = document.getElementById('talentSkills');
    talent.skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill.charAt(0).toUpperCase() + skill.slice(1);
        skillsContainer.appendChild(skillTag);
    });
}

// Handle form submission
const form = document.getElementById('talentForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Solicitud enviada! Nos pondremos en contacto pronto.');
    form.reset();
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', populateTalentPage);