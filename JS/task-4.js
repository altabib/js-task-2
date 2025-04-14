const formValue = document.querySelector(".login-form");
const inputEmail = document.querySelector("input[name=email]");
const inputPassword = document.querySelector("input[name=password]");

formValue.addEventListener("submit", (event) => {
    event.preventDefault();
    const trimValue = inputEmail.value.trim();
    const trimPassword = inputPassword.value.trim();

if (trimValue === "" || trimPassword === "") {
    alert("Please fill in all the fields!");
    return;
}
    const formData = {
        Login: trimValue,
        Password: trimPassword
}
    
    console.log(formData);
    formValue.reset();

});
