const button = document.querySelector('.button');
const quote = document.querySelector('.quote');

const getJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  quote.textContent = data.value;
  quote.innerHTML = `<img src="${data.icon_url}"`;
};

button.addEventListener('click', getJoke);
