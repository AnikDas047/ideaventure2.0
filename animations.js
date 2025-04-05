document.addEventListener('DOMContentLoaded', function() {
    // Floating particles in hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        for (let i = 0; i < 20; i++) {
            createParticle(heroSection);
        }
    }

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            if (this.classList.contains('btn-gradient')) {
                this.style.boxShadow = '0 10px 20px rgba(110, 69, 226, 0.3)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            if (this.classList.contains('btn-gradient')) {
                this.style.boxShadow = 'none';
            }
        });
    });

    // Instagram post hover effects
    const igPosts = document.querySelectorAll('.ig-post');
    igPosts.forEach(post => {
        post.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.ig-overlay');
            overlay.style.opacity = '1';
            overlay.querySelector('i').style.transform = 'scale(1)';
        });
        
        post.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.ig-overlay');
            overlay.style.opacity = '0';
            overlay.querySelector('i').style.transform = 'scale(0.8)';
        });
    });

    // Create a floating particle
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle floating';
        
        // Random properties
        const size = Math.random() * 6 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.1;
        const animationDuration = Math.random() * 10 + 5;
        const animationDelay = Math.random() * 5;
        const color = `rgba(255, 255, 255, ${opacity})`;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';
        particle.style.top = `${posY}%`;
        particle.style.left = `${posX}%`;
        particle.style.animationDuration = `${animationDuration}s`;
        particle.style.animationDelay = `${animationDelay}s`;
        
        container.appendChild(particle);
    }

    // Add floating animation to features
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.style.transitionDelay = `${index * 0.1}s`;
    });
});
// Animation initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animation on Scroll)
    initAOS();
    
    // Initialize number counters
    initCounters();
    
    // Mobile menu toggle
    initMobileMenu();
});

// Simple AOS implementation
function initAOS() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Number counter animation
function initCounters() {
    const counterElements = document.querySelectorAll('.number[data-count]');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                
                animateValue(element, 0, target, duration);
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    counterElements.forEach(element => {
        observer.observe(element);
    });
}

function animateValue(element, start, end, duration) {
    let startTime = null;
    
    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.innerText = value;
        
        if (progress < 1) {
            window.requestAnimationFrame(animate);
        }
    }
    
    window.requestAnimationFrame(animate);
}

// Mobile menu toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            
            if (navLinks) {
                if (navLinks.style.display === 'flex') {
                    navLinks.style.display = 'none';
                } else {
                    navLinks.style.display = 'flex';
                    navLinks.style.flexDirection = 'column';
                    navLinks.style.position = 'absolute';
                    navLinks.style.top = '100%';
                    navLinks.style.left = '0';
                    navLinks.style.width = '100%';
                    navLinks.style.backgroundColor = 'rgba(6, 7, 15, 0.95)';
                    navLinks.style.padding = '20px';
                    navLinks.style.backdropFilter = 'blur(10px)';
                }
            }
        });
    }
}