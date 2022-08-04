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
    fetch('https://s3.amazonaws.com/makeitreal/countries.json')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
          let country = data[i];
          const table = document.querySelector('.show');
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td><img src="${country["flag_url"]}" alt="${country["name"]}"></td>
            <td>${country["code"]}</td>
            <td>${country["name"]}</td>
          `;
          table.appendChild(tr);
        };
    });
  };