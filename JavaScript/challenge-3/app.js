const json = `[
  { "code": "CO", "name": "Colombia", "flag_url": "https://s3.amazonaws.com/makeitreal/co.gif" },
  { "code": "PE", "name": "Perú", "flag_url": "https://s3.amazonaws.com/makeitreal/pe.gif" },
  { "code": "EC", "name": "Ecuador", "flag_url": "https://s3.amazonaws.com/makeitreal/ec.gif" },
  { "code": "BO", "name": "Bolivia", "flag_url": "https://s3.amazonaws.com/makeitreal/bo.gif" }
]`;

// Escribe tu solución acá
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  renderTable();
  renderData();
});
const renderTable = () => {
  const table = document.querySelector('.hide');
  table.classList.remove('hide');
  table.classList.add('show');
}
const renderData = () => {
  const arr = JSON.parse(json);
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    const table = document.querySelector('.show');
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${obj["flag_url"]}" alt="${obj["name"]}"></td>
        <td>${obj["code"]}</td>
      <td>${obj["name"]}</td>
    `;
    table.appendChild(tr);
  };
};