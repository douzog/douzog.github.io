// ================================
// Email Obfuscation
// ================================

// Deobfuscate email addresses on page load (anti-spam protection)
document.addEventListener('DOMContentLoaded', () => {
    const obfuscatedEmails = document.querySelectorAll('.obfuscated-email');
    
    obfuscatedEmails.forEach(link => {
        const user = link.getAttribute('data-user');
        const domain = link.getAttribute('data-domain');
        
        if (user && domain) {
            // Construct email address
            const email = user + '@' + domain;
            
            // Update href on click to prevent bots from scraping
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'mailto:' + email;
            });
            
            // Add title attribute for hover tooltip
            link.setAttribute('title', 'Email: ' + email);
        }
    });
});

// ================================
// Navigation Functionality
// ================================

let navbar, hamburger, navMenu, navLinks;

function initNav() {
    navbar = document.getElementById('navbar');
    hamburger = document.getElementById('hamburger');
    navMenu = document.getElementById('nav-menu');
    navLinks = document.querySelectorAll('.nav-link');
    if (!navbar || !hamburger || !navMenu) return;

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', initNav);

// Add scrolled class to navbar on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    navbar = document.getElementById('navbar');
    if (!navbar) return;
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
});

// ================================
// Active Navigation Link on Scroll
// ================================

const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ================================
// Smooth Scroll (nav links) – use scrollIntoView so it works with scroll-snap
// ================================

document.addEventListener('DOMContentLoaded', () => {
    const navAnchors = document.querySelectorAll('.nav-link[href^="#"]');
    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.getElementById(href.slice(1));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// ================================
// Intersection Observer for Animations
// ================================

const animateOnScroll = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Optionally stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', animateOnScroll);

// ================================
// Parallax Effect for Hero Background
// ================================

const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// ================================
// Typing Effect for Hero Subtitle (Optional Enhancement)
// ================================

function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
// const heroSubtitle = document.querySelector('.hero-subtitle');
// if (heroSubtitle) {
//     const originalText = heroSubtitle.textContent;
//     window.addEventListener('load', () => {
//         typeWriter(heroSubtitle, originalText, 50);
//     });
// }

// ================================
// Dynamic Year in Footer
// ================================

const updateFooterYear = () => {
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = `&copy; ${currentYear} Isabella I. Douzoglou. All rights reserved.`;
    }
};

updateFooterYear();

// ================================
// Skill Tags Interactive Hover Effect
// ================================

const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ================================
// Timeline Items Stagger Animation
// ================================

const staggerTimelineAnimation = () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 150); // Stagger delay
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    timelineItems.forEach(item => observer.observe(item));
};

document.addEventListener('DOMContentLoaded', staggerTimelineAnimation);

// ================================
// Card Hover 3D Effect
// ================================

const cards = document.querySelectorAll('.education-card, .publication-card, .award-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ================================
// Lazy Loading for Performance
// ================================

if ('IntersectionObserver' in window) {
    const lazyLoadObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazyElement = entry.target;
                // Add any lazy loading logic here
                lazyLoadObserver.unobserve(lazyElement);
            }
        });
    });
    
    // Observe sections for lazy loading
    sections.forEach(section => {
        lazyLoadObserver.observe(section);
    });
}

// ================================
// Scroll Progress Indicator
// ================================

const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #7c3aed);
        z-index: 9999;
        transition: width 0.1s ease;
        width: 0%;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createScrollProgress();

// ================================
// Performance: Debounce Scroll Events
// ================================

function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(() => {
    highlightNavigation();
}, 10));

// ================================
// Accessibility: Keyboard Navigation
// ================================

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav-menu');
    const ham = document.getElementById('hamburger');
    if (!nav || !ham) return;

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            ham.classList.remove('active');
            nav.classList.remove('active');
        }
    });

    const focusableElements = 'a[href], button, textarea, input, select';
    const focusableContent = nav.querySelectorAll(focusableElements);
    const firstFocusableElement = focusableContent[0];
    const lastFocusableElement = focusableContent[focusableContent.length - 1];

    document.addEventListener('keydown', function(e) {
        if (!nav.classList.contains('active')) return;
        if (e.key !== 'Tab') return;
        if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
            }
        }
    });
});

// ================================
// Console Easter Egg
// ================================

console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cInterested in the code? Check out the repository!', 'font-size: 14px; color: #475569;');
console.log('%c🚀 Built with HTML, CSS, and vanilla JavaScript', 'font-size: 12px; color: #7c3aed;');

// ================================
// Initialize Everything
// ================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    console.log('✅ Portfolio website loaded successfully!');
});

