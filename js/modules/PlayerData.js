// eslint-disable-next-line no-unused-vars
class PlayerData {
    constructor(playerName1, playerName2, choicePlayer1, choicePlayer2) {
        this.playerName1 = playerName1;
        this.playerName2 = playerName2;
        this.choicePlayer1 = choicePlayer1;
        this.choicePlayer2 = choicePlayer2;
    }

    validatePlayerName(playerOneInput, playerTwoInput, validateInfo) {
        validateInfo.style.display = 'none';
        playerOneInput.classList.remove('form__input--validate');
        playerTwoInput.classList.remove('form__input--validate');

        if (playerOneInput.value == '' && playerTwoInput.value == '') {
            validateInfo.style.display = 'block';
            playerOneInput.classList.add('form__input--validate');
            playerTwoInput.classList.add('form__input--validate');
            return false;
        }
        else if (playerOneInput.value == '') {
            validateInfo.style.display = 'block';
            playerOneInput.classList.add('form__input--validate');
            return false;
        }
        else if (playerTwoInput.value == '') {
            validateInfo.style.display = 'block';
            playerTwoInput.classList.add('form__input--validate');
            return false;
        }
        else {
            validateInfo.style.display = 'none';
            playerOneInput.classList.remove('form__input--validate');
            playerTwoInput.classList.remove('form__input--validate');
            return true;
        }
    }

    validatePlayerSide(playerOneSide, playerTwoSide, validateInfo) {
        if (playerOneSide.options[playerOneSide.selectedIndex].value == playerTwoSide.options[playerTwoSide.selectedIndex].value) {
            validateInfo.style.display = 'block';
            playerOneSide.classList.add('form__select--validate');
            playerTwoSide.classList.add('form__select--validate');
            return false;
        }
        else {
            validateInfo.style.display = 'none';
            playerOneSide.classList.remove('form__select--validate');
            playerTwoSide.classList.remove('form__select--validate');
            return true;
        }
    }
}