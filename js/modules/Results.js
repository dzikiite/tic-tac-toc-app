class Results {
    constructor(statsFields, result) {
        this.statsFields = statsFields;
        this.result = result;
        this.playerOneStats = 0;
        this.playerTwoStats = 0;
        this.drawStats = 0;
    }

    setPlayerName(statsFields, playerOne, playerTwo) {
        statsFields.forEach(field => {
            if (field.dataset.id == 'player1') {
                field.innerHTML = `${playerOne} wins: <span class="stats__field--span" data-id="player1">0</span>`;
            }
            else if (field.dataset.id == 'draws') {
                field.innerHTML = `draws: <span class="stats__field--span" data-id="draws">0</span>`
            }
            else if (field.dataset.id == 'player2') {
                field.innerHTML = `${playerTwo} wins: <span class="stats__field--span" data-id="player2">0</span>`;
            }
        })
    }

    setPlayerResult(result, statsFields) {
        if (result == 'player1') {
            statsFields.forEach(field => {
                if (field.dataset.id == 'player1') {
                    field.lastChild.textContent = this.playerOneStats += 1;
                }
            })
        }
        else if (result == 'player2') {
            statsFields.forEach(field => {
                if (field.dataset.id == 'player2') {
                    field.lastChild.textContent = this.playerTwoStats += 1;
                }
            })
        }
        else if (result == 'draw') {
            statsFields.forEach(field => {
                if (field.dataset.id == 'draws') {
                    field.lastChild.textContent = this.drawStats += 1;
                }
            })
        }
    }

    showResultPopup(result, popup, winInfo, playerOneName, playerTwoName) {
        if (result == 'player1') {
            winInfo.textContent = `good job! ${playerOneName} won!`;
            popup.style.display = 'flex';
        }
        else if (result == 'player2') {
            winInfo.textContent = `good job! ${playerTwoName} won!`;
            popup.style.display = 'flex';
        }
        else if (result == 'draw') {
            winInfo.textContent = `it was a draw game!`;
            popup.style.display = 'flex';
        }
    }
}