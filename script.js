// Animasi Skill Bar
window.addEventListener("load", () => {
    const bars = document.querySelectorAll(".progress-bar");

    bars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
});

