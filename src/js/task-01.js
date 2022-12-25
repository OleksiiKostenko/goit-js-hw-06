const listEl = document.querySelectorAll('li.item');
console.log(listEl);
console.log(`Number of categorise: ${listEl.length}`);



listEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.children.length}`);
});

