const listEl = document.querySelectorAll('li.item ul');
console.log(`Number of categorise: ${listEl.length}`);


listEl.forEach(item => {
    console.log(`Category: ${item.previousElementSibling.textContent}`);
    console.log(`Elements: ${item.children.length}`);
});

