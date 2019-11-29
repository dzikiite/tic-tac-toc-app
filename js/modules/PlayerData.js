// eslint-disable-next-line no-unused-vars
class PlayerData {
    constructor(playerName1, playerName2, choicePlayer1, choicePlayer2) {
        this.playerName1 = playerName1;
        this.playerName2 = playerName2;
        this.choicePlayer1 = choicePlayer1;
        this.choicePlayer2 = choicePlayer2;
    }

    validatePlayerSide(playerOneSide, playerTwoSide) {
        if (playerOneSide.options[playerOneSide.selectedIndex].value == playerTwoSide.options[playerTwoSide.selectedIndex].value) {
            playerOneSide.classList.add('form__select--validate');
            playerTwoSide.classList.add('form__select--validate');
            return false;
        }
        else {
            playerOneSide.classList.remove('form__select--validate');
            playerTwoSide.classList.remove('form__select--validate');
            return true;
        }
    }
}