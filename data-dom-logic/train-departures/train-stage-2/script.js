const tableData = document.getElementById('table-data');
const departures = [
  494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625,
];

let newArr = [];

departures.forEach((time) => {
  const hours = Math.floor(time / 60);
  const mins = String(time % 60).padStart(2, '0');
  time = {
    hrs: hours,
    mins: mins,
  };
  newArr.push(time);
  console.log(time);
  tableData.innerHTML += `<tr><td>${hours}:${mins}</td></tr>`;
});

console.log(newArr);
