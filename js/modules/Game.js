class Game {
    constructor(playgroundQueue) {
        this.playgroundQueue = playgroundQueue;
        this.sideControler = false;
        this.winCombinations = [
            [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]
        ]
        this.playerOneMoves = [];
        this.playerTwoMoves = [];
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
        if (field.innerHTML == '') {
            if (!this.sideControler) {
                field.innerHTML = '<i class="far fa-circle"></i>';
                this.sideControler = !this.sideControler;
                this.playerOneMoves.push(field.dataset.key);
                console.log(this.playerOneMoves);
                console.log(this.sideControler);
                console.log(field);
            }
            else if (this.sideControler) {
                field.innerHTML = '<i class="fas fa-times"></i>';
                this.sideControler = !this.sideControler;
                this.playerTwoMoves.push(field.dataset.key);
                console.log(this.playerTwoMoves);
                console.log(this.sideControler);
                console.log(field);
            }
        }
        this.setQueue(this.playgroundQueue, this.sideControler);
        this.playerOneMoves.forEach(move => {

        })
    }
}