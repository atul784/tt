document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const downg =     document.getElementById("down")
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        downg.classList.toggle("downm");
    });
});
 