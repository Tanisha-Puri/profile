const parallaxContainer = document.querySelector('.parallax-container');
const background = document.querySelector('.background');

parallaxContainer.addEventListener('mousemove', (event) => {
    const x = event.clientX - parallaxContainer.offsetLeft;
    const y = event.clientY - parallaxContainer.offsetTop;
    const factor = 0.05;

    background.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
});