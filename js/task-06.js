const inputAreaEl = document.querySelector('#validation-input');



inputAreaEl.addEventListener("blur", (evt) => {
    evt.preventDefault();
    if (evt.currentTarget.value.length === Number(inputAreaEl.dataset.length)) {
        return inputAreaEl.classList.add('valid')
    } else {
        return inputAreaEl.classList.add('invalid')
    }
});

inputAreaEl.addEventListener("focus", () => {
    inputAreaEl.classList.remove(inputAreaEl.classList);
})

