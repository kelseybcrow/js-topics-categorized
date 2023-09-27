const loadData = async () => {
  const response = await fetch(
    'https://classes.codingbootcamp.cz/assets/classes/602/guardian.php'
  );
  const data = await response.json();
  console.log(data);

  const categories = data.data;
  console.log(categories);

  const menu = document.getElementById('menu');

  categories.forEach((category) => {
    const categoryH3 = document.createElement('h3');
    categoryH3.innerText = category;
    console.log(category);
    menu.appendChild(categoryH3);
    categoryH3.addEventListener('click', () => {
      loadArticles(category);
    });
  });
};
loadData();

const loadArticles = (category) => {
  console.log(category);
  const loadData = async () => {
    const articlesList = document.getElementById('articles');
    articlesList.innerHTML = '';

    const response = await fetch(
      `https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=${category}`
    );
    const data = await response.json();
    const articlesArr = data.data.channel.item;
    console.log(articlesArr);
    articlesArr.forEach((article) => {
      const li = document.createElement('li');
      li.innerHTML = `<li>${article.title}</li>`;
      articlesList.appendChild(li);
    });
  };
  loadData();
};
