
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log(formData.get('email'))
    console.log(formData.get('password'))


    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
        alert("All fields are required");
    } else (event.currentTarget.reset());

      
}



