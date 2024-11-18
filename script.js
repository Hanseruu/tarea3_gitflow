const correctUsername = "hansell";
const correctPassword = "12345";

function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username === correctUsername && password === correctPassword) {
        message.style.color = "green";
        message.textContent = "Login exitoso!";
    } else {
        message.style.color = "red";
        message.textContent = "Credenciales incorrectas. Intenta de nuevo.";
    }

    return false;
}
