// Sahifa to‘liq yuklanganda "fade-in" klassini qo‘shish
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("fade-in");
});

// Scroll qilinganda bo‘limlarni asta ko‘rsatish
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Tugmalarga interaktiv animatsiya
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = "scale(1.05)";
        btn.style.boxShadow = "0 5px 15px rgba(97, 218, 251, 0.4)";
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = "scale(1)";
        btn.style.boxShadow = "none";
    });
});
