// Hamburger menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate elements on scroll
const animatedElements = document.querySelectorAll('.animate');
function animateOnScroll() {
    const windowHeight = window.innerHeight;
    animatedElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Animate skill bars
const skillSection = document.getElementById('skills');
const skillBars = document.querySelectorAll('.skill-level');

function animateSkills() {
    const skillTop = skillSection.getBoundingClientRect().top;
    if(skillTop < window.innerHeight - 100) {
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.width = bar.getAttribute('data-skill');
            }, index * 300);
        });
    }
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
// Highlight navbar link based on section in viewport
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links li a');

function highlightNav() {
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; // Adjust for header height
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNav);
window.addEventListener('load', highlightNav);
