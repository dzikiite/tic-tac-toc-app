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

    getWinner(field) {
        if (field.innerHTML == '') {
            if (!this.sideControler) {
                field.innerHTML = '<i class="far fa-circle"></i>';
                this.sideControler = !this.sideControler;
                this.playerOneMoves.push(field.dataset.key);
            }
            else if (this.sideControler) {
                field.innerHTML = '<i class="fas fa-times"></i>';
                this.sideControler = !this.sideControler;
                this.playerTwoMoves.push(field.dataset.key);
            }
        }

        this.setQueue(this.playgroundQueue, this.sideControler);

        this.winCombinations.sort();
        this.playerOneMoves.sort();
        this.playerTwoMoves.sort();


        let checkWinner = () => {
            this.winCombinations.sort();
            this.playerOneMoves.sort();
            this.playerTwoMoves.sort();
            let i, j;
            for (i = 0, j = 0; i < this.playerOneMoves.length && j < this.winCombinations[0].length;) {
                if (this.playerOneMoves[i] < this.winCombinations[0][j]) {
                    ++i;
                    console.log(this.winCombinations[0][j]);
                } else if (this.playerOneMoves[i] == this.winCombinations[0][j]) {
                    ++i; ++j;
                } else {
                    return false;
                }
            }
            console.log(j == this.winCombinations[0].length)
            return j == this.winCombinations[0].length;

        }

    }
}