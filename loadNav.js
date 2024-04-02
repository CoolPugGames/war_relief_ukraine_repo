// loadNav.js

document.addEventListener('DOMContentLoaded', function () {
    
    // Fetch and insert the navigation content
    fetch('/nav.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navigation-container').innerHTML = html;
        })
        .catch(error => console.error('Error fetching navigation:', error));
});

// document.addEventListener('DOMContentLoaded', function () {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-fixed');

//     menuToggle.addEventListener('click', function () {
//         navLinks.classList.toggle('show-menu');
//     });
// });

// window.onscroll = function() { scrollFunction(); };

// function scrollFunction() {
//     var nav = document.getElementById("mainNav");

//     if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
//         nav.classList.add("nav-fixed");
//     } else {
//         nav.classList.remove("nav-fixed");
//     }
// }

