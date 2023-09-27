const cart = {
  total: {
    amount: 91.6,
    currency: 'CZK',
  },
  items: [
    {
      name: 'Apples',
      amount: '2kg',
      price: 62.6,
    },
    {
      name: 'Cinnamon',
      amount: 1,
      price: 29,
    },
  ],
};

let cart_string = JSON.stringify(cart);
let shopping_cart = JSON.parse(cart_string);

// cheapest = items.reduce((a, b) => Math.min(a, b));
// const cheapest2 = Math.min(...items['price']);

const btn = document.querySelector('.remove-cheapest');

btn.addEventListener('click', () => {
  let cheapest = null;
  let cheapestIndex = null;
  // why doesn't this items variable work?
  // const items = shopping_cart.items;
  shopping_cart.items.forEach((item, index) => {
    if (cheapest === null || item.price < cheapest.price) {
      cheapest = item;
      cheapestIndex = index;
    }
  });
  shopping_cart.items.splice(cheapestIndex, 1);
  // why isn't it shopping_cart.items? ->
  displayItems(shopping_cart);
  // .filter((item) => item !== cheapest);
});

const displayItems = (cart) => {
  const ul = document.querySelector('ul.items');
  ul.innerHTML = '';
  // for ( const item in cart )
  cart.items.forEach((item) => {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = `${item.name} ${item.amount}`;
    li.classList.add('items__item');
  });
};

displayItems(shopping_cart);

const cartBtn = document.querySelector('button.add-item');

cartBtn.addEventListener('click', () => {
  let name_input_value = document.querySelector('.item-name-input').value;
  let amount_input_value = document.querySelector('.item-amount-input').value;
  let price_input_value = document.querySelector('.item-price-input').value;

  // Object.values(new_item).forEach((value) => {});
  if (
    name_input_value != '' &&
    amount_input_value != '' &&
    price_input_value != ''
  ) {
    const new_item = {
      name: name_input_value,
      amount: amount_input_value,
      price: price_input_value,
    };
    shopping_cart.items.push(new_item);
    displayItems(shopping_cart);

    // why doesn't using the variables we already created for the input work? isn't the if statement in the same scope as the btn event listener? so shouldn't the variables be available in the if statement?
    document.querySelector('.item-name-input').value = '';
    document.querySelector('.item-amount-input').value = '';
    document.querySelector('.item-price-input').value = '';
    // name_input_value = '';
    // amount_input_value = '';
    // price_input_value = '';
  }
});
