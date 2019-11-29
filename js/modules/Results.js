class Results {
    constructor(statsFields, result) {
        this.statsFields = statsFields;
        this.result = result;
    }

    setPlayerName(statsFields, playerOne, playerTwo) {
        statsFields.forEach((field) => {
            if (field.dataset.id == 'player1') {
                field.textContent = `${playerOne}:`;
            }
            else if (field.dataset.id == 'player2') {
                field.textContent = `${playerTwo}:`;
            }
        })
    }
}