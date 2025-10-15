// Animasi muncul saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, 100 * index); // animasi bertahap
    });

    // Scroll ke atas otomatis saat halaman dimuat
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Efek klik
    cards.forEach(card => {
        card.addEventListener('mousedown', () => {
            card.style.transform = 'scale(0.98)';
        });
        card.addEventListener('mouseup', () => {
            card.style.transform = 'scale(1)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
    // Tunggu semua konten dimuat
window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // Tambahkan class hidden ke setiap card
        card.classList.add('hidden');
    });

    // Tampilkan dengan animasi satu per satu
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.remove('hidden');
            card.classList.add('visible');
        }, 150 * index); // Delay antar kartu
    });

    // Scroll ke atas otomatis
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Efek klik interaktif
    cards.forEach(card => {
        card.addEventListener('mousedown', () => {
            card.style.transform = 'scale(0.97)';
        });
        card.addEventListener('mouseup', () => {
            card.style.transform = 'scale(1)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});

});
