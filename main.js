document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    // Scroll Header Effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Notify Button
    const notifyBtn = document.querySelector('.btn-notify');
    if (notifyBtn) {
        notifyBtn.addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-check"></i><span>Notifications On</span>';
            this.classList.add('notified');
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-bell"></i><span>Notify Me</span>';
                this.classList.remove('notified');
            }, 2000);
        });
    }

    // Simple AOS implementation
    const aosElements = document.querySelectorAll('[data-aos]');
    
    const checkAOS = () => {
        aosElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('aos-animate');
            }
        });
    };
    
    // Check on load and scroll
    checkAOS();
    window.addEventListener('scroll', checkAOS);

    // Instagram Feed (simulated)
    const igPosts = document.querySelectorAll('.ig-post');
    igPosts.forEach((post, index) => {
        post.style.transitionDelay = `${index * 0.1}s`;
    });
});
// Add these to your existing main.js

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Responsive adjustments
function handleResponsive() {
    if (window.innerWidth < 768) {
        // Mobile specific adjustments
    } else {
        // Desktop adjustments
    }
}

window.addEventListener('resize', handleResponsive);
handleResponsive();
// Add this to your main.js file or create one if it doesn't exist

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Handle gallery filters if on gallery page
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Countdown timer if on homepage
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (daysElement && hoursElement && minutesElement && secondsElement) {
        // Set the countdown date (3 months from now)
    
        const countDownDate = new Date('2025-05-16T00:00:00');

        
        // Update the count down every 1 second
        const countdownTimer = setInterval(function() {
            // Get today's date and time
            const now = new Date().getTime();
            
            // Find the distance between now and the count down date
            const distance = countDownDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display the result
            daysElement.textContent = days.toString().padStart(2, '0');
            hoursElement.textContent = hours.toString().padStart(2, '0');
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            secondsElement.textContent = seconds.toString().padStart(2, '0');
            
            // If the count down is finished, clear interval
            if (distance < 0) {
                clearInterval(countdownTimer);
                daysElement.textContent = "00";
                hoursElement.textContent = "00";
                minutesElement.textContent = "00";
                secondsElement.textContent = "00";
            }
        }, 1000);
    }
});
// Add to main.js
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.parentElement.classList.contains('active');
            
            // Close all other FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            // Toggle current FAQ
            if (!isActive) {
                this.parentElement.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
    
    // Number counter animation for About page stats
    const stats = document.querySelectorAll('.number[data-count]');
    
    if (stats.length > 0) {
        const animateStats = () => {
            stats.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const current = parseInt(stat.textContent);
                const increment = target / 50;
                
                if (current < target) {
                    stat.textContent = Math.ceil(current + increment);
                    setTimeout(animateStats, 40);
                } else {
                    stat.textContent = target;
                }
            });
        };
        
        // Start animation when section is in view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateStats();
                observer.disconnect();
            }
        });
        
        observer.observe(document.querySelector('.stats'));
    }
});
// FAQ accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('FAQ script loaded'); // This will help confirm the script is running
    
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const answer = this.nextElementSibling;
        
        // Toggle the active class
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('active');
          item.querySelector('.faq-answer').style.maxHeight = null;
        });
        document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach((question) => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle('show');
        });
    });
});
        
        // Open current FAQ if it wasn't active
        if (!isActive) {
          faqItem.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  });