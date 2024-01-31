    document.getElementById('searchBar').addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const subjects = document.querySelectorAll('.subject');
      const subjectDetailsContainer = document.querySelector('.subject-details-container');

      subjects.forEach((subject) => {
        const subjectName = subject.textContent.toLowerCase();
        if (subjectName.includes(searchTerm)) {
          subject.style.display = 'block';
        } else {
          subject.style.display = 'none';
        }
      });

      subjectDetailsContainer.style.display = 'none';
    });

    function showSubjectDetails(subject) {
      const subjectDescriptions = document.querySelectorAll('.subject-about-container li');
      const subjectHeading = document.getElementById('subjectHeading');
      const subjectDescription = document.getElementById('subjectDescription');
      const subjectDetailsContainer = document.querySelector('.subject-details-container');

      subjectDescriptions.forEach((description) => {
        if (description.textContent.includes(subject)) {
          subjectHeading.textContent = subject;
          subjectDescription.textContent = description.textContent;
          subjectDetailsContainer.style.display = 'block';
          return;
        }
      });
    }