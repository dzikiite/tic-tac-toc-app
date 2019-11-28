

class App {
    constructor() {

        this.player1Name = document.querySelector('.form__input--player1');
        this.player2Name = document.querySelector('.form__input--player2');
        this.player1Side = document.querySelector('.form__select--player1');
        this.player2Side = document.querySelector('.form__select--player2');
        this.startBtn = document.querySelector('.form__submit-button');
        this.playgroundFields = document.querySelectorAll('.playground__item');
        this.statsFields = document.querySelectorAll('.stats__field');


        this.startBtn.addEventListener('click', this.startGame.bind(this));

        this.that = this;
    }

    render() {

        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });

    }

    startGame() {
        const playerData = new PlayerData(this.player1Name.value, this.player2Name.value, this.player1Side.value, this.player2Side.value);
        console.log(this);
        playerData.getPlayerData(1);
    }
}

const app = new App();