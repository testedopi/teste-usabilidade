function scrollToSection(event, sectionId) {
    event.preventDefault(); 
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('rolagem');
    } else {
        header.classList.remove('rolagem');
    }
});

