class App {
    constructor() {

        this.player1Name = document.querySelector('.form__input--player1');
        this.player2Name = document.querySelector('.form__input--player2');
        this.player1Side = document.querySelector('.form__select--player1');
        this.player2Side = document.querySelector('.form__select--player2');
        this.startBtn = document.querySelector('.form__submit-button');
        this.validateInfo = document.querySelector('.form__validate--paragraph');
        this.playgroundQueue = document.querySelector('.playground__queue');
        this.playgroundFields = document.querySelectorAll('.playground__item');
        this.statsFields = document.querySelectorAll('.stats__field');
        this.popup = document.querySelector('.popup');
        this.popupExit = document.querySelector('.popup__exit');
        this.winInfo = document.querySelector('.popup__info');
        this.playAgainBtn = document.querySelector('.popup__submit-button');
        this.game = new Game(this.playgroundQueue);
        this.results = new Results(this.statsFields, this.game.gameResult);

        this.startBtn.addEventListener('click', this.startGame.bind(this));
        this.popupExit.addEventListener('click', () => { this.popup.style.display = 'none'; });
        this.playAgainBtn.addEventListener('click', () => { this.popup.style.display = 'none'; });
    }

    render() {

        const playerData = new PlayerData(this.player1Name.value, this.player2Name.value, this.player1Side.value, this.player2Side.value);
        let controlerSide = playerData.validatePlayerSide(this.player1Side, this.player2Side, this.validateInfo);
        let controlerName = playerData.validatePlayerName(this.player1Name, this.player2Name, this.validateInfo);
        if (!controlerSide) {
            return;
        }
        if (!controlerName) {
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
        this.game.setQueue(this.playgroundQueue, this.game.sideControler);
        this.playgroundFields.forEach(field => {
            field.addEventListener('click', () => {
                this.game.gameControler(field);
                this.results.setPlayerResult(this.game.gameResult, this.statsFields);
                this.results.showResultPopup(this.game.gameResult, this.popup, this.winInfo, playerData.playerName1, playerData.playerName2);
            });
        });
    }
}