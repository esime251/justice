document.addEventListener("DOMContentLoaded", function () {
    // Add fade-in effect when scrolling
    const sections = document.querySelectorAll(".section");

    function fadeInOnScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.8) {
                section.classList.add("show");
            }
        });
    }

    // Initial check
    fadeInOnScroll();

    // Event listener for scrolling
    window.addEventListener("scroll", fadeInOnScroll);
});
