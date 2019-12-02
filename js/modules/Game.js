class Game {
    constructor(playgroundQueue) {
        this.playgroundQueue = playgroundQueue;
        this.sideControler = false;
    }

    setQueue(playgroundQueue, sideControler) {
        if (!sideControler) {
            playgroundQueue.innerHTML = `your move: <i
            class="far fa-circle"></i>`
        }
        else {
            playgroundQueue.innerHTML = `your move: <i class="fas fa-times"></i>`
        }
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
        this.setQueue(this.playgroundQueue, this.sideControler);
    }
}