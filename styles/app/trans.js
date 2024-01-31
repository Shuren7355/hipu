        document.addEventListener("DOMContentLoaded", () => {
          const wordInput = document.getElementById("wordInput");
          const searchButton = document.getElementById("searchButton");
          const resultsDiv = document.getElementById("results");

          searchButton.addEventListener("click", async () => {
            const word = wordInput.value.trim();
            if (!word) {
              resultsDiv.innerHTML = "<p>Please enter a word.</p>";
              return;
            }

            try {
              const punjabiResponse = await fetch(`https://api.mymemory.translated.net/get?q=${word}&langpair=en|pa`);
              const punjabiData = await punjabiResponse.json();
              const punjabiTranslation = punjabiData?.matches?.[0]?.translation || 'Translation not available';

              const hindiResponse = await fetch(`https://api.mymemory.translated.net/get?q=${word}&langpair=en|hi`);
              const hindiData = await hindiResponse.json();
              const hindiTranslation = hindiData?.matches?.[0]?.translation || 'Translation not available';

              resultsDiv.innerHTML = `
                        <div class="translation">
                            <p><strong>Word:</strong> ${word}</p>
                            <p><strong>Punjabi Translation:</strong> ${punjabiTranslation}</p>
                            <p><strong>Hindi Translation:</strong> ${hindiTranslation}</p>
                        </div>`;
            } catch (error) {
              resultsDiv.innerHTML = "<p>Error fetching data. Please try again later.</p>";
              console.error("Error:", error);
            }
          });
        });