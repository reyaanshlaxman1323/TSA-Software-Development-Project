const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match! Please try again.");
            return;
        }

        localStorage.setItem("summitUser", username);
        localStorage.setItem("summitPass", password);
        localStorage.setItem("isLoggedIn", "true");

        alert("Account created! Welcome to Basecamp, " + username + ".");
        window.location.href = "Dashboard.html";
    });
}

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const enteredUser = document.getElementById("login-username").value.trim();
        const enteredPass = document.getElementById("login-password").value;

        const savedUser = localStorage.getItem("summitUser");
        const savedPass = localStorage.getItem("summitPass");

        if (enteredUser === savedUser && enteredPass === savedPass) {
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "Dashboard.html";
        } else {
            alert("Invalid username or password. Please check your details or create an account.");
        }
    });
}