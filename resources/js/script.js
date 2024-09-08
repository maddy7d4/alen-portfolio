document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in-section, .slide-up-section, .scale-section, .animate');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

window.onload = function() {
    document.getElementById("header").style.display = "block";
    document.getElementById("desc").style.display = "block";
    document.getElementById("headnav").style.display = "block";
    document.getElementById("header").classList.add("headerClass");
    document.getElementById("desc").classList.add("descClass");
    document.getElementById("headnav").classList.add("headnavClass");
}

document.getElementsByClassName("btn")[0].onclick = function() {
    form();
}

document.getElementById("hire").onclick = function() {
    form();
}

function form() {
    document.getElementsByClassName("btn")[0].style.display = 'none';
    document.getElementById("form").style.maxHeight = "1000px";
}


