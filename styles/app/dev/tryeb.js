    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    document.addEventListener("DOMContentLoaded", function() {
    // Get the logout button element
    var logoutButton = document.getElementById("logoutButton");

    // Add click event listener to the logout button
    logoutButton.addEventListener("click", function() {
        // Perform any logout actions here (e.g., clear session data, etc.)
        // Redirect to the login page
        window.location.href = "index.html";
    });
});
  //  const darkModeToggle = document.getElementById("darkModeToggle");
  //  const body = document.body;
    
    // Check if dark mode is enabled in local storage
//    const isDarkMode = localStorage.getItem("darkMode") === "true";
    
    // Function to enable or disable dark mode
//    function toggleDarkMode() {
//      if (isDarkMode) {
        body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "true");
//      } else {
//        body.classList.add("dark-mode");
//        localStorage.setItem("darkMode", "flase");
//      }
  //  }
    
    // Set initial mode based on local storage
//    if (isDarkMode) {
//      body.classList.add("dark-mode");
//    }
     // Add click event listener to the dark mode toggle button
//     darkModeToggle.addEventListener("click", toggleDarkMode);
