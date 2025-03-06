function checkPassword() {
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (password === "Romanticlove") {
        document.getElementById("password-section").style.display = "none";  // Hide password section
        document.getElementById("main-content").style.display = "flex";  // Show main content
    } else {
        errorMessage.textContent = "Incorrect password! Try again.";  // Show error message
    }
    }
