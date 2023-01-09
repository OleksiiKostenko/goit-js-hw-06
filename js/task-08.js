
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    formData.forEach((email, password) => {
        console.log(email);
        console.log(password);
    })


    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
        alert("All fields are required");
    } else (event.currentTarget.reset());

      
}



