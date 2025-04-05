document.addEventListener('DOMContentLoaded', function() {
    // Create particles
    createParticles();
    
    // Animate loading bar
    animateLoadingBar();
    
    // Animate text
    animateText();
    
    // Redirect to main page after loading
    setTimeout(redirectToMainPage, 3000);
});

// Create particles in the background
function createParticles() {
    const container = document.querySelector('.loading-container');
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles');
    container.appendChild(particlesContainer);
    
    // Create 20 particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 5 and 15px
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        const duration = Math.random() * 3 + 2;
        particle.style.animationDuration = `${duration}s`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 2}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Animate the loading bar
function animateLoadingBar() {
    const loadingBar = document.querySelector('.loading-bar');
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width += 1;
            loadingBar.style.width = width + '%';
        }
    }, 20);
}

// Animate the text
function animateText() {
    const words = document.querySelectorAll('.word');
    words.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = '1';
            word.style.transform = 'translateY(0)';
            word.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, 500 + (index * 150));
    });
}

// Redirect to main page after loading is complete
function redirectToMainPage() {
    const loadingContainer = document.querySelector('.loading-container');
    loadingContainer.style.opacity = '0';
    loadingContainer.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500);
}

// If you want to show loading screen only on first visit
function checkFirstVisit() {
    if (sessionStorage.getItem('firstVisit') === null) {
        // First visit, show loading screen
        sessionStorage.setItem('firstVisit', 'false');
    } else {
        // Not first visit, redirect immediately
        window.location.href = 'index.html';
    }
}

// Uncomment the line below if you want to show loading screen only on first visit
// checkFirstVisit();