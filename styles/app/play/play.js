    // ... (The JavaScript part remains the same as before)
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';

    function checkWinner() {
      const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
      ];

      for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
          // Highlight the winning cells
          cells[a].classList.add('winning');
          cells[b].classList.add('winning');
          cells[c].classList.add('winning');
          return true;
        }
      }

      return false;
    }

    function checkDraw() {
      return Array.from(cells).every(cell => cell.textContent);
    }

    function handleCellClick(event) {
      const cell = event.target;
      if (!cell.textContent) {
        cell.textContent = currentPlayer;

        if (checkWinner()) {
          alert(`Player ${currentPlayer} wins!`);
          resetGame();
        } else if (checkDraw()) {
          alert("It's a draw!");
          resetGame();
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    }

    function resetGame() {
      cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('winning');
      });
      currentPlayer = 'X';
    }