// Variables globales
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

// Fonction pour changer de slide
function changeSlide(direction) {
    // Retirer la classe active de la slide actuelle
    slides[currentSlideIndex].classList.remove('active');
    indicators[currentSlideIndex].classList.remove('active');
    
    // Calculer le nouvel index
    currentSlideIndex += direction;
    
    // Gérer le bouclage
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    // Ajouter la classe active à la nouvelle slide
    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
}

// Fonction pour aller à une slide spécifique
function currentSlide(n) {
    slides[currentSlideIndex].classList.remove('active');
    indicators[currentSlideIndex].classList.remove('active');
    
    currentSlideIndex = n - 1;
    
    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
}

// Défilement automatique (optionnel)
function autoSlide() {
    changeSlide(1);
}

// Démarrer le défilement automatique toutes les 5 secondes
setInterval(autoSlide, 5000);

// Permettre la navigation au clavier
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});