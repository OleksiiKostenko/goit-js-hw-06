const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients')
console.log(listEl);


for (const ingredient of ingredients) {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  listEl.append(li);
}












