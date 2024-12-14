// Star Animation
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

// Set canvas size to window size
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvasSize();
window.addEventListener('resize', setCanvasSize);

// Star properties
const stars = [];
const maxStars = 200;
const starColors = ['#ffffff', '#eeeeee', '#dddddd'];

// Create stars
for (let i = 0; i < maxStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.1,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        opacity: Math.random()
    });
}

// Animation function
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw stars
    stars.forEach(star => {
        // Update position
        star.y -= star.speed;
        if (star.y < 0) {
            star.y = canvas.height;
            star.x = Math.random() * canvas.width;
        }
        
        // Update opacity for twinkling effect
        star.opacity += (Math.random() - 0.5) * 0.1;
        star.opacity = Math.max(0, Math.min(1, star.opacity));
        
        // Draw star
        ctx.beginPath();
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.opacity;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    });
    
    requestAnimationFrame(animate);
}

// Start animation
animate();

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
