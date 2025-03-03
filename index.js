document.addEventListener('DOMContentLoaded', () => {
    const contactEmail = document.getElementById('contactEmail');
    const contactPhone = document.getElementById('contactPhone');
    const emailInput = document.getElementById('emailInput');
    const phoneInput = document.getElementById('phoneInput');
    const menu = document.querySelector('#menu-bars');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header .navbar a');

    // Navbar Toggle
    menu.addEventListener('click', () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });

    // Close navbar when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
        });
    });

    // Highlight active link on scroll
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const top = window.scrollY;
            const height = section.offsetHeight;
            const offset = section.offsetTop - 150;
            const id = section.getAttribute('id');
            if (top >= offset && top < offset + height) {
                currentSectionId = id;
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('active');
            }
        });
    });

    // Toggle email and phone input visibility
    contactEmail.addEventListener('change', () => {
        emailInput.style.display = contactEmail.checked ? 'block' : 'none';
        phoneInput.style.display = 'none';
    });

    contactPhone.addEventListener('change', () => {
        phoneInput.style.display = contactPhone.checked ? 'block' : 'none';
        emailInput.style.display = 'none';
    });

    // Handle form submission
    window.handleSubmit = function() {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const message = document.getElementById('message').value;
        const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;

        if (contactMethod === 'email') {
            const email = document.getElementById('emailInput').value;
            const mailtoLink = `mailto:v33phaks@gmail.com?subject=Contact from ${firstName} ${lastName}&body=${message}`;
            window.location.href = mailtoLink;
        } else if (contactMethod === 'phone') {
            const whatsappMessage = `https://wa.me/27637660739?text=Hello, my name is ${firstName} ${lastName}. ${message}`;
            window.open(whatsappMessage, '_blank');
        }
    };

    // Loader fade-out functionality
    function loader() {
        document.querySelector('.loader-container').classList.add('fade-out');
    }

    function fadeOut() {
        setInterval(loader, 5000);
    }

    window.onload = fadeOut;

    // Auto-play video when in view
    const aboutVideo = document.getElementById("aboutVideo");
    const aboutSection = document.querySelector(".about");

    function playVideoWhenInView() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionBottom = aboutSection.getBoundingClientRect().bottom;

        if (sectionTop <= window.innerHeight && sectionBottom >= 0) {
            aboutVideo.play();
        } else {
            aboutVideo.pause();
        }
    }

    window.addEventListener("scroll", playVideoWhenInView);

    // Typed text animation
    new Typed('.multiple-text', {
        strings: ['Industrial Supplies', '& Farming.'],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 1200,
        loop: true,
    });
});



// Home Slider
var swiper = new Swiper(".homeSlider", {
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
