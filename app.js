const black = document.querySelector(".black");

const blackSlider = (e) => {
    const x = e.clientX;
    black.style.left = x + 'px';
};

window.addEventListener("mousemove", blackSlider);