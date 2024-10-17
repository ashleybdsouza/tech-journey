// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Portfolio filter
const portfolioFilter = document.querySelector('.portfolio-filter');
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioFilter.addEventListener('change', function () {
    const selectedCategory = this.value;
    portfolioItems.forEach(item => {
        if (item.dataset.category === selectedCategory || selectedCategory === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});