function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "romantic"; // Change this to your preferred password

    if (password === correctPassword) {
        document.getElementById("password-container").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
    } else {
        document.getElementById("error-message").innerText = "Incorrect password. Try again.";
    }
            }
