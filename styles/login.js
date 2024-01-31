document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "WorldToMe" && password === "@Gohawar") {
      setTimeout(function() {
        window.location.href = "index2.html";
      }, 3000); // Redirect after 3 seconds
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
});