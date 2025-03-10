function checkScreenSize() {
    const navBar = document.querySelector('.nav-bar');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        // Hide navigation bar and show hamburger menu
        navBar.style.display = 'none';
        hamburgerMenu.style.display = 'block';
    } else {
        // Show navigation bar and hide hamburger menu
        navBar.style.display = 'flex';
        hamburgerMenu.style.display = 'none';
    }
}
window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize);



