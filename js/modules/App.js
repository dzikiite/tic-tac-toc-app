

class App {
    constructor() {

        this.player1Name = document.querySelector('.form__input--player1');
        this.player2Name = document.querySelector('.form__input--player2');
        this.player1Side = document.querySelector('.form__select--player1');
        this.player2Side = document.querySelector('.form__select--player2');
        this.startBtn = document.querySelector('.form__submit-button');
        this.playgroundFields = document.querySelectorAll('.playground__item');
        this.statsFields = document.querySelectorAll('.stats__field');
        this.results = new Results(this.statsFields, 0);

        this.startBtn.addEventListener('click', this.startGame.bind(this));
        
    }

    render() {

        const playerData = new PlayerData(this.player1Name.value, this.player2Name.value, this.player1Side.value, this.player2Side.value);
        let controler = playerData.validatePlayerSide(this.player1Side, this.player2Side);
        if (!controler) {
            return;
        }

        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });

    }

    startGame() {
        this.render();
        const playerData = new PlayerData(this.player1Name.value, this.player2Name.value, this.player1Side.value, this.player2Side.value);
        this.results.setPlayerName(this.statsFields, playerData.playerName1, playerData.playerName2);
    }
}