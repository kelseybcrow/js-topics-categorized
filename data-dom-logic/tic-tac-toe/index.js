const fieldArray = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const fieldDivs = document.querySelectorAll('.field');

let currentPlayer = 'X';

// Add the actions to the divs
fieldDivs.forEach(function (fieldDiv, index) {
  fieldDiv.addEventListener('click', function () {
    // identify the appropriate column/row indices for each of the divs
    const rowIndex = Math.floor(index / 3); // 0,1,2 -> 0; 3,4,5 -> 1; 6,7,8 -> 2
    const columnIndex = index % 3; // 0,3,6 -> 0; 1,4,7 -> 1; 2,5,8 -> 2
    // only allow any action to happen, if the field is still empty
    if (fieldArray[rowIndex][columnIndex] === '') {
      fieldDiv.textContent = currentPlayer;
      fieldArray[rowIndex][columnIndex] = currentPlayer;
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
});
