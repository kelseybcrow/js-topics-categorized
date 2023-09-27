const tbody = document.querySelector('.board__table tbody');
const loader = document.querySelector('h3.loader');

const getData = async () => {
  loader.style.visibility = 'visible';
  const response = await fetch(
    'https://classes.codingbootcamp.cz/assets/classes/api/departures-slow.php'
  );
  const dataArray = await response.json();
  console.log(dataArray);
  loader.style.visibility = 'hidden';

  dataArray.forEach((row) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<tr>
        <td class="board__time">${row.time.hrs}:${row.time.mins}</td>
        <td class="board__train">${row.train}</td>
        <td class="board__no">${row.no}</td>
        <td class="board__to">${row.to}</td>
        <td class="board__status">${row.status}</td>
        <td><button class="board__status__btn">Change       status</button></td>
        <td class="board__track">${row.track}</td>
        </tr>`;

    const btn = tr.querySelector('.board__status__btn');
    const status = tr.querySelector('.board__status');

    btn.addEventListener('click', () => {
      row.status = 'Delayed';
      tr.classList.toggle('delayed');
      tr.classList.contains('delayed')
        ? (status.innerHTML = 'Delayed')
        : (status.innerHTML = 'On Time');
    });
    tbody.appendChild(tr);
  });
};
const loadBtn = document.querySelector('button.load-btn');
loadBtn.addEventListener('click', getData);
