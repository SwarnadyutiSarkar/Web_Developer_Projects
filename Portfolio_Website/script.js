// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substr(1);
        const target = document.getElementById(targetId);

        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});
