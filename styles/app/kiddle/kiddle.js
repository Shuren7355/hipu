    function performSearch() {
      const searchQuery = document.getElementById('searchInput').value;
      if (searchQuery.trim() !== '') {
        const searchUrl = `https://www.kiddle.co/s.php?q=${encodeURIComponent(searchQuery)}`;
        window.location.href = searchUrl;
      }
    }
    document.addEventListener("DOMContentLoaded", () => {
      const openButton = document.getElementById("openBot");
      const botContainer = document.getElementById("botContainer");
      const wordInput = document.getElementById("wordInput");
      const searchButton = document.getElementById("searchButton");
      const resultsDiv = document.getElementById("results");
      const audioPlayer = document.getElementById("audioPlayer");

      openButton.addEventListener("click", () => {
        botContainer.style.display = "block";
      });

      searchButton.addEventListener("click", async () => {
        const word = wordInput.value.trim();
        if (word === "") {
          return;
        }
        try {
          const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
          const data = await response.json();
          // Assuming the API response has a pronunciation field
          const pronunciation = data[0].phonetics[0].audio;

          // Play audio pronunciation
          audioPlayer.src = pronunciation;
          audioPlayer.play();

          // Assuming the API response has meanings
          const meanings = data[0].meanings;

          // Display results
          resultsDiv.innerHTML = `<p><strong>Word:</strong> ${word}</p>`;
          meanings.forEach(meaning => {
            resultsDiv.innerHTML += `<p><strong>${meaning.partOfSpeech}</strong>: ${meaning.definitions[0].definition}</p>`;
            if (meaning.synonyms) {
              resultsDiv.innerHTML += `<p><strong>Synonyms:</strong> ${meaning.synonyms.join(', ')}</p>`;
            }
            if (meaning.antonyms) {
              resultsDiv.innerHTML += `<p><strong>Antonyms:</strong> ${meaning.antonyms.join(', ')}</p>`;
            }
          });

          // Translate to Punjabi
          const punjabiResponse = await fetch(`https://api.mymemory.translated.net/get?q=${word}&langpair=en|pa`);
          const punjabiData = await punjabiResponse.json();
          const punjabiTranslation = punjabiData.matches[0].translation;
          resultsDiv.innerHTML += `<p><strong>Punjabi Translation:</strong> ${punjabiTranslation}</p>`;
          const hindiResponse = await fetch(`https://api.mymemory.translated.net/get?q=${word}&langpair=en|hi`);
          const hindiData = await hindiResponse.json();
          const hindiTranslation = hindiData.matches[0].translation;
          resultsDiv.innerHTML += `<p><strong>Hindi Translation:</strong> ${hindiTranslation}</p>`;

        } catch (error) {
          resultsDiv.innerHTML = "<p>Error fetching data</p>";
        }

      });
    });