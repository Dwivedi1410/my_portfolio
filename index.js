document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("changingText");
    const texts = ["Programmer", "Web Developer", "Cybersecurity Enthusiast"];
    let currentIndex = 0;

    function changeText() {
        textElement.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    setInterval(changeText, 1000); // Text change every 1 second
});


window.addEventListener('load', (event) => {
    let hash = window.location.hash;
    if (hash === '#home-section') {
        let homeSection = document.getElementById('home-section');
        if (homeSection) {
            homeSection.scrollIntoView();
        }
    }
});













const cloudAnimation = document.getElementsByClassName("cloud-animation");


cloudAnimation.classList.add('move-cloud');
