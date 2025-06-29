const container = document.getElementById('container');
const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
}

function removeColor(element) {
  setTimeout(() => {
    element.style.backgroundColor = '#1d1d1d';
  }, 1000);
}

function getRandomColor() {
  const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
  return colors[Math.floor(Math.random() * colors.length)];
}
