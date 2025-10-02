// VacationBNA Staff Digital Card - Interactive Features
// Optional JavaScript enhancements for the digital card component

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for contact links
    const contactRows = document.querySelectorAll('.contact-row');
    
    contactRows.forEach(row => {
        // Add click tracking (optional)
        row.addEventListener('click', function(e) {
            const contactType = this.querySelector('.contact-text').textContent;
            console.log(`Contact clicked: ${contactType}`);
            
            // Optional: Add analytics tracking here
            // gtag('event', 'contact_click', {
            //     'contact_type': this.href.split(':')[0],
            //     'contact_value': contactType
            // });
        });
        
        // Add keyboard support for better accessibility
        row.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Add card hover effects with reduced motion support
    const staffCards = document.querySelectorAll('.staff-card');
    
    staffCards.forEach(card => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (!prefersReducedMotion) {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-4px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        }
    });
    
    // Print functionality removed as requested
    
    // Handle responsive behavior
    function handleResize() {
        const cards = document.querySelectorAll('.staff-card');
        const container = document.querySelector('.container, .examples-container');
        
        if (window.innerWidth <= 320) {
            // Small screen optimizations
            cards.forEach(card => {
                card.style.margin = '0 8px';
            });
        } else if (window.innerWidth <= 480) {
            // Medium screen optimizations
            cards.forEach(card => {
                card.style.margin = '0 16px';
            });
        } else {
            // Large screen optimizations
            cards.forEach(card => {
                card.style.margin = '0';
            });
        }
    }
    
    // Listen for resize events
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            // Fallback for broken images
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHZpZXdCb3g9IjAgMCA4OCA4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDQiIGN5PSI0NCIgcj0iNDQiIGZpbGw9IiNGMEYwRjAiLz4KPHN2ZyB4PSIzNCIgeT0iMzQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTIgMTJDMTQuMjA5MSAxMiAxNiAxMC4yMDkxIDE2IDhDMTYgNS43OTA5IDE0LjIwOTEgNCAxMiA0QzkuNzkwODYgNCA4IDUuNzkwOSA4IDhDOCAxMC4yMDkxIDkuNzkwODYgMTIgMTIgMTJaIiBmaWxsPSIjOTk5OTk5Ii8+CjxwYXRoIGQ9Ik0xMiAxNEM5LjM5MjkxIDE0IDcuMDAwMDEgMTUuMjE0MyA1LjQ2NDQ3IDE3LjA0NjlDNC4xNzE1NyAxOC42MjE0IDMuNSAyMC41MjE0IDMuNSAyMi41VjI0SDIwLjVWMjIuNUMxOS41IDIwLjUyMTQgMTguODI4NCAxOC42MjE0IDE3LjUzNTUgMTcuMDQ2OUMxNiAxNS4yMTQzIDEzLjYwNzEgMTQgMTIgMTRaIiBmaWxsPSIjOTk5OTk5Ii8+Cjwvc3ZnPgo8L3N2Zz4K';
        });
    });
    
    // Add focus management for better accessibility
    const focusableElements = document.querySelectorAll('a, button, [tabindex]');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #2B6EF6';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
});

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        // Add any exported functions here if needed
    };
}
