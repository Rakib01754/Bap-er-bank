function myFunction() {
    const passField = document.getElementById('pass-field');
    if (passField.type === "password") {
        passField.type = "text";
    } else {
        passField.type = "password";
    }
}

const loginButton = document.getElementById('login-btn')
loginButton.addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const emailValue = emailField.value;
    const passField = document.getElementById('pass-field');
    const passValue = passField.value;

    if (emailValue === 'amar@email.com' && passValue === 'amarpassword') {
        window.location.href = "wallet.html"
    }
    else {
        alert('Sorry Your Email Or password is wrong')
    }

})