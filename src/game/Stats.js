
export class Stats {
    constructor() {
        this.games = 0;
        this.wins = 0;
        this.losses = 0;
    }

    getGames() {
        return this.games;
    }

    getWins() {
        return this.wins;
    }

    getLosses() {
        return this.losses;
    }

    addGame() {
        this.games++;
    }

    addWin() {
        this.wins++;
    }

    addLoss() {
        this.losses++;
    }

    getWinRate() {
        return this.wins / this.games;
    }

}