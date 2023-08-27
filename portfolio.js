const toggle = document.getElementById('nav-toggle');
nav = document.getElementById('nav-menu');
if (toggle && nav) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}



const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 390) {
            current = section.getAttribute('id');
        }
    })

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.classList.contains(current)) {
            link.classList.add('active');
        }   
    })

    if(document.querySelector('#skills').getBoundingClientRect().top <= window.innerHeight / 1.5){
        document.querySelectorAll('#animateInScroll').forEach((e, i) => {
            e.style.transition = '600ms'
            e.style.transitionDelay = `${80 * i}ms`;
            e.style.opacity = 1;
            e.style.transform = 'translateY(0)'
        })
    }
})


document.querySelector('#home').classList.add('up');
document.querySelector('.gif-image').classList.add('up')

window.onload = () => {
    document.querySelector('#home').classList.add('down');
    setTimeout(() => {
        document.querySelector('.gif-image').classList.add('down')
    }, 200);
}

const navMenu = document.getElementById("nav-menu");
navLinks.forEach((n) => n.addEventListener("click", () => { navMenu.classList.remove("show") }));