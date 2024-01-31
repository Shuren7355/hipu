      document.getElementById('searchInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
          performSearch();
        }
      });

      document.getElementById('searchButton').addEventListener('click', function() {
        performSearch();
      });

      function performSearch() {
        const searchQuery = document.getElementById('searchInput').value;
        if (searchQuery.trim() !== '') {
          // Redirect to Wolfram Alpha with the search query as a parameter
          window.location.href = `https://www.wolframalpha.com/input/?i=${encodeURIComponent(searchQuery)}`;
        }
      }

      // Calculator functionality
      document.addEventListener("DOMContentLoaded", function() {
        const chatArea = document.getElementById("chatArea");
        const userInput = document.getElementById("userInput");
        const sendButton = document.getElementById("sendButton");
        const openBotButton = document.getElementById("botBox");
        const botOverlay = document.getElementById("botOverlay");

        sendButton.addEventListener("click", sendMessage);
        openBotButton.addEventListener("click", toggleBotOverlay);

        function sendMessage() {
          const userMessage = userInput.value.trim(); // Trim whitespace
          if (!userMessage) return; // Don't send if message is empty

          appendUserMessage(userMessage);
          const resultMessage = calculateExpression(userMessage);
          appendBotMessage(resultMessage);

          userInput.value = "";
          chatArea.scrollTop = chatArea.scrollHeight;
        }

        function appendUserMessage(message) {
          const userMessageElement = createMessageElement("user-message", message);
          chatArea.appendChild(userMessageElement);
        }

        function appendBotMessage(message) {
          const botMessageElement = createMessageElement("bot-message", message);
          chatArea.appendChild(botMessageElement);
        }

        function createMessageElement(className, content) {
          const messageElement = document.createElement("div");
          messageElement.className = className;
          messageElement.textContent = content;
          return messageElement;
        }

        function calculateExpression(expression) {
          try {
            const result = eval(expression);
            return `Result: ${result}`;
          } catch (error) {
            return "Invalid expression";
          }
        }

        function toggleBotOverlay() {
          botOverlay.classList.toggle("active");

          if (botOverlay.classList.contains("active")) {
            const overlayHeight = botOverlay.clientHeight;
            botOverlay.style.top = `calc(50% - ${overlayHeight / 2}px)`;
          }
        }
      });

      const openBotButton = document.getElementById("openBotButton");
      const botOverlay = document.getElementById("botOverlay");

      openBotButton.addEventListener("click", toggleBotOverlay);

      function toggleBotOverlay() {
        botOverlay.classList.toggle("active");
      }