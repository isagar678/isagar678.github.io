function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const cursor = document.querySelector('.cursor');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function animateCursor() {
    // Update cursor position with a slight lag
    cursorX += (mouseX - cursorX) * 0.2; // Adjust the factor (0.1) for more or less lag
    cursorY += (mouseY - cursorY) * 0.2; // Adjust the factor (0.1) for more or less lag

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    requestAnimationFrame(animateCursor); // Call the function again for the next frame
}

// Start the animation
animateCursor();