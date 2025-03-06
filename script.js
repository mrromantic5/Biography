function checkPassword() {
    let password = document.getElementById("password").value;

    if (password === "Romanticlove") {
        document.getElementById("password-container").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        alert("Incorrect password! Try again.");
    }
}
