  // Get all dropdown buttons
      var dropdowns = document.querySelectorAll('.dropdown-btn');

    // Loop through each dropdown button
dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('click', function(event) {
        // Toggle the active status of the dropdown content for this specific dropdown
        var content = this.nextElementSibling;
        content.classList.toggle('show');

        // Close other open dropdowns except the one clicked
        var otherDropdowns = document.querySelectorAll('.dropdown-content');
        otherDropdowns.forEach(function(item) {
          if (item !== content && item.classList.contains('show')) {
            item.classList.remove('show');
          }
        });
      });


        // Close the dropdown if the user clicks outside
        window.addEventListener('click', function(event) {
          if (!event.target.matches('.dropdown-btn')) {
            var dropdownContents = document.querySelectorAll('.dropdown-content');
            dropdownContents.forEach(function(content) {
              if (content.classList.contains('show')) {
                content.classList.remove('show');
              }
            });
          }
        });
      });
 function toggleVisibility(id) {
            var content = document.getElementById(id);
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }