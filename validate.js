// the form that holds the input elements
const form = document.querySelector('.form');
//  the error image
const errorImage = document.querySelector('.error-svg');
// the arrow image
const arrowImage = document.querySelector('.arrow-svg');
//  the input field
const emailInput = document.querySelector('.input')

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    validateEmail(emailInput);
});


const validateEmail = emailInput => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput.value.match(mailformat)) {
        alert("Thank you for signing up.");
        errorImage.classList.add('hide');
        emailInput.focus();
        return true;
    }
    else {
        alert("Please enter a valid email address!");
        errorImage.classList.remove('hide');
        // arrowImage.classList.add('hide');
        emailInput.focus();
        return false;
    }
}
