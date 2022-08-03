// 1. Inserta 4 items más con el texto 3, 4, 5 y 6 respectivamente dentro del contenedor.
for (let i = 3; i <= 6; i++) {
  const container = document.querySelector('.container');
  const div = document.createElement('div');
  div.classList.add('item');
  div.textContent = i;
  container.appendChild(div);
};

// const item3 = document.createElement('div');
// const item4 = document.createElement('div');
// const item5 = document.createElement('div');
// const item6 = document.createElement('div');
// const container = document.querySelector('.container');

// container.appendChild(item3);
// container.appendChild(item4);
// container.appendChild(item5);
// container.appendChild(item6);

// item3.textContent = '3';
// item4.textContent = '4';
// item5.textContent = '5';
// item6.textContent = '6';

// 2. Agrégales a todos los items la clase error
const items = document.querySelectorAll('.item');
console.log(items)
items.forEach(e => e.classList.add('error'));


// item3.classList.add('item');
// item4.classList.add('item');
// item5.classList.add('item');
// item6.classList.add('item');

// div.classList.add('error')
// item3.classList.add('error');
// item4.classList.add('error');
// item5.classList.add('error');
// item6.classList.add('error');

// 3. Agrégale el texto "2" al círculo
const circle = document.querySelector('.circle');
circle.textContent = '2';
// 4. Elimina el párrafo

const p = document.querySelector('p');
p.parentNode.removeChild(p);
