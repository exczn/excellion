// JavaScript for the sales page

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Checkout form handling
document.addEventListener('DOMContentLoaded', function() {
    const buyButton = document.querySelector('.price-card .btn-primary');
    
    if (buyButton) {
        buyButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real implementation, this would handle payment processing
            // For this demo, we'll just redirect to the thank-you page
            window.location.href = 'thank-you.html';
        });
    }
    
    // Add to order button on thank-you page
    const addToOrderButton = document.querySelector('.offer-text .btn-primary');
    
    if (addToOrderButton) {
        addToOrderButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real implementation, this would handle the additional purchase
            // For this demo, we'll just show a confirmation message
            alert('Thank you! The mini book "Why Not Other Cryptocurrencies?" has been added to your order.');
            
            // Redirect to download page (in a real implementation)
            // window.location.href = 'download.html';
        });
    }
});
