const changeTextSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');



changeTextSizeEl.addEventListener('input', (evt) => {
    textEl.style.fontSize = `${evt.currentTarget.value}px`
})

