
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
    
    const inputValue = event.currentTarget.elements;
    const inputValueEmail = inputValue.email.value;
    const inputValuePassword = inputValue.password.value;

    const formData = {
        inputValueEmail,
        inputValuePassword,
    };



    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
        alert("All fields are required");
    } else (event.currentTarget.reset());

      console.log(formData)
}

