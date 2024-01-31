    // Parallax Effect
    const parallax = document.querySelector("body::before");
    window.addEventListener("scroll", function() {
      const offset = window.scrollY;
      parallax.style.transform = `translateY(-${offset * 0.2}px)`;
    });
    const textOverlay = document.getElementById("text-overlay");
    const mapContainer = document.getElementById("map-container");

    mapContainer.addEventListener("mouseenter", () => {
      textOverlay.style.opacity = 1;
    });

    mapContainer.addEventListener("mouseleave", () => {
      textOverlay.style.opacity = 0;
    });