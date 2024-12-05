// toggle icon k liye code 

// scroll section 

//active wala page

 
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav1');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior

            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked link
            link.classList.add('active');

            // Scroll to the target section
            const targetId = link.getAttribute('href').substring(1); // Remove the '#' from href
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Optional: Add active class based on the current scroll position
    window.addEventListener('scroll', () => {
        let currentSection = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 50) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
});


// togglleeee   meannnuu icccooonn 

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}





window.onscroll = () => {
    // sticky header 
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle button when click on toggle 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}



// project k liye js 
document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-box');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    
    const scrollAmount = 200; // Adjust the scroll amount as needed

    leftBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    rightBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});