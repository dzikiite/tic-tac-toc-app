class Game {
    constructor() {
        this.playgroundField = document.querySelectorAll('.playground__item');
        this.sideControler = false;
    }

    handleClick(field) {
        if (!this.sideControler) {
            field.innerHTML = '<i class="far fa-circle"></i>';
            this.sideControler = !this.sideControler;
        }
        else if (this.sideControler) {
            field.innerHTML = '<i class="fas fa-times"></i>';
            this.sideControler = !this.sideControler;
        }
    }
}