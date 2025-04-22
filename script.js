// Grab the mode toggle checkbox
const modeToggle = document.getElementById('mode-toggle');

// Check if there's a saved theme in localStorage or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

// Set the toggle state based on the saved theme
if (currentTheme === 'dark') {
  modeToggle.checked = false;  // Dark mode is unchecked (because it's the default)
} else {
  modeToggle.checked = true;  // Light mode is checked
}

// Event listener for the toggle
modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
        // If the toggle is checked, set light mode
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');  // Save light mode to localStorage
    } else {
        // If the toggle is unchecked, set dark mode
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');  // Save dark mode to localStorage
    }
});
// Select the scroll-to-top button
// Improved scroll event handler with throttling
let scrollTimeout;
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', function() {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollTopBtn.style.display = 'block';
                scrollTopBtn.style.opacity = '1';
            } else {
                scrollTopBtn.style.opacity = '0';
                setTimeout(() => {
                    if (scrollTopBtn.style.opacity === '0') {
                        scrollTopBtn.style.display = 'none';
                    }
                }, 300);
            }
            scrollTimeout = null;
        }, 100);
    }
});
// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
// Hide loader when page is loaded
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});
// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.querySelector('header nav ul');

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('show');
        document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('show');
            document.body.classList.remove('menu-open');
        });
    });
}
