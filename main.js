document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');

    // 1. Efecto Scroll en Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    });

    // 2. Abrir/Cerrar Menú Móvil
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('is-active');
        hamburger.classList.toggle('is-open'); // Para animar el icono
    });

    // 3. Cerrar menú al clickear un link (Evita el bug de quedarse abierto)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('is-active');
        });
    });
});