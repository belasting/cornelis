const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

function createSnowflake() {
  return {
    x: Math.random() * canvas.width,
    y: 0,
    radius: Math.random() * 3 + 1,
    speed: Math.random() * 1 + 0.5
  };
}

function drawSnowflake(flake) {
  ctx.beginPath();
  ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
  ctx.fillStyle = 'white';
  ctx.fill();
}

function updateSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snowflakes.forEach((flake, i) => {
    flake.y += flake.speed;
    if (flake.y > canvas.height) {
      snowflakes[i] = createSnowflake();
    }
    drawSnowflake(flake);
  });
  requestAnimationFrame(updateSnowflakes);
}

for (let i = 0; i < 100; i++) {
  snowflakes.push(createSnowflake());
}
updateSnowflakes();

window.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('audio');
  setTimeout(() => {
    audio.play().catch(e => console.warn('Autoplay blocked:', e));
  }, 500); // korte delay helpt soms
});

window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bg-music');
  const overlay = document.getElementById('enter-overlay');
  const background = document.querySelector('.background');

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    background.style.filter = 'none';
    audio.play().catch(e => console.warn('Autoplay blocked:', e));
  });
});