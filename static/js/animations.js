/* Animations */
document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll(".fade-down-anim");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-down-anim-now');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    targets.forEach(target => observer.observe(target));
});