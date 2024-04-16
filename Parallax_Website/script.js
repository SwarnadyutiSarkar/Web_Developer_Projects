document.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    const parallaxElements = document.querySelectorAll(".parallax-background");

    parallaxElements.forEach(function(element) {
        const speed = parseFloat(element.getAttribute("data-speed"));
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});
