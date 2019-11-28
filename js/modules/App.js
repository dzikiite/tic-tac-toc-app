const player1Name = document.querySelector('.form__input--player1');
const player2Name = document.querySelector('.form__input--player2');
const player1Side = document.querySelector('.form__select--player1');
const player2Side = document.querySelector('.form__select--player2');
const startBtn = document.querySelector('.form__submit-button');

class App {
    constructor() {

        this.scrollToGame = () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
            });
        }

        this.fetchPlayerData = () => {
            const playerData = new PlayerData(player1Name.value, player2Name.value, player1Side.value, player2Side.value);
        }
    }
}

const app = new App();

startBtn.addEventListener('click', app.scrollToGame);