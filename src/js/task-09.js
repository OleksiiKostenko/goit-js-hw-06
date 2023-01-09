function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();

    const dataFormEl = event.currentTarget.elements;
    const emailForm = dataFormEl.email.value;
    const passForm = dataFormEl.password.value;

    const formData = {
        emailForm,
        passForm,
    };



    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.email.value === '') {
        alert("All fields are required");
    } else (event.currentTarget.reset());

      
}
