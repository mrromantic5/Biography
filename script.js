function checkPassword() {
    let password = document.getElementById("password").value;

    if (password === "Romanticlove") { 
        document.getElementById("password-section").style.display = "none";  // Hide password section
        document.getElementById("main-content").style.display = "block";  // Show main content
    } else {
        alert("Incorrect password! Try again.");
    }
}
