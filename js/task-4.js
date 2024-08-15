const userForm = document.querySelector("form.login-form");
userForm.addEventListener("submit", eventForm);

function eventForm(event) {
    event.preventDefault();
    const form = event.target;
    const userEmail = (form.elements.email.value).trim();
    const keyEmail = form.elements.email.name;
    const userPwd = (form.elements.password.value).trim();
    const keyPwd = form.elements.password.value;
    if(!userEmail || !userPwd) alert('All form fields must be filled in');
    const result = {
        keyEmail: userEmail,
        keyPwd: userPwd,
    }
    console.log("result:", result)
    form.reset();
    return result;
}
