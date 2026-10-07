const themeButton = document.querySelector("#themebutton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});


const registrationForm = document.querySelector("#registrationform");
const formMessage = document.querySelector("#formmessage");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent = "Registration successful!";
});

