const btn = document.querySelector('#append');
const box = document.querySelector('.squares')

btn.addEventListener('click', () => {
  addSquare();
});

const addSquare = function () {
  const square = document.createElement('div');
  square.classList.add('square');
  const squares = document.querySelector('.squares');
  squares.appendChild(square);
};

box.addEventListener('click', () => {
  const square = document.querySelector('.square');
  square.parentNode.removeChild(square);
});

