// eslint-disable-next-line no-unused-vars
class PlayerData {
    constructor(playerName1, playerName2, choicePlayer1, choicePlayer2) {
        this.playerName1 = playerName1;
        this.playerName2 = playerName2;
        this.choicePlayer1 = choicePlayer1;
        this.choicePlayer2 = choicePlayer2;
    }

    getPlayerData(playerNumber) {
    //     if (playerNumber == 0) {
    //         return [this.playerName1, this.choicePlayer1]
    //     }
    //     else if (playerNumber == 1) {
    //         return [this.playerName2, this.choicePlayer2]
    //     }
    //     else {
    //         console.log('błędne dane')
    //     }
    // }
    console.log(playerNumber, this.playerName1);
    }
}