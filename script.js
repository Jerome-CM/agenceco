// script.js
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function() {
        if(navMenu.style.display === 'flex'){
            navMenu.style.display='none';
        } else {
            navMenu.style.display='flex';
        }

    });

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navMenu.style.display='none';
        });
    });

});
