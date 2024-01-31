    // JavaScript functionalities
    let dropdownBtnText = document.getElementById("drop-text");
    let span = document.getElementById("span");
    let icon = document.getElementById("icon");
    let list = document.getElementById("list");
    let input = document.getElementById("search-input");
    let listItems = document.querySelectorAll(".dropdown-list-item");

    dropdownBtnText.onclick = function () {
      list.classList.toggle("show");
      icon.style.rotate = "-180deg";
    };

    window.onclick = function (e) {
      if (
        e.target.id !== "drop-text" &&
        e.target.id !== "icon" &&
        e.target.id !== "span"
      ) {
        list.classList.remove("show");
        icon.style.rotate = "0deg";
      }
    };

    for (item of listItems) {
      item.onclick = function (e) {
        span.innerText = e.target.innerText;
        input.placeholder = "Search in " + e.target.innerText + "...";
        input.setAttribute("data-search", e.target.getAttribute("data-search"));
      };
    }

    function updateSearchEngine(value) {
      const searchEngine = input.getAttribute("data-search");
      if (searchEngine) {
        window.location.href = searchEngine + value;
      }
    }
