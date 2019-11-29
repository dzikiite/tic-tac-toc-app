class Results {
    constructor(statsFields, result) {
        this.statsFields = statsFields;
        this.result = result;
    }

    setPlayerName(statsFields, playerOne, playerTwo) {
        statsFields.forEach(field => {
            if (field.dataset.id == 'player1') {
                field.innerHTML = `${playerOne} wins:`;
            }
            else if (field.dataset.id == 'draws') {
                field.innerHTML = `draws: <span class="stats__field--span" data-id="draws">0</span>`
            } 
            else if (field.dataset.id == 'player2') {
                field.innerHTML = `${playerTwo} wins: <span class="stats__field--span" data-id="player2">0</span>`;
            }
        })
    }

    setPlayerResult(result) {

    }
}