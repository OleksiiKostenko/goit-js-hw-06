const decrementBtn = document.querySelector('button[data-action="decrement"]'); 
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;


decrementBtn.addEventListener('click', decrementBtnClickHandle);
incrementBtn.addEventListener('click', incrementBtnClickHandle);

function incrementBtnClickHandle() {
    counterValue += 1;
    return value.textContent = counterValue;
   
}

function decrementBtnClickHandle() {
    counterValue -= 1;
   return value.textContent = counterValue;
}






