const bt1 = document.getElementById('bt1');
const bt2 = document.getElementById('bt2');

bt1.addEventListener('click', async () => {
  fetch('http://localhost:8000/students')
    .then((data) => data.json())
    .then((data) => {
      console.log(data);

      for (i = 1; i <= data.length; i++) {}
    });
  const main = document.getElementById('main');
  const table = document.createElement('table');
  main.appendChild(table);
  const tr = document.createElement('tr');
  table.appendChild(tr);
  const th1 = document.createElement('th');
  const th2 = document.createElement('th');
  const th3 = document.createElement('th');
  const th4 = document.createElement('th');
  th1.textContent = 'Name';
  th2.textContent = 'Age';
  th3.textContent = 'Email';
  th4.textContent = 'Coursc';
  /*  tr.appendChild([th1, th2, th3, th4]); */
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
});
