class Team {
    constructor(name) {
        this._name = name;
        this._countGames = 1;
        this._countGoals = 0;
    }
    
    countGames() {
        this._countGames ++;
    }

    statistics() {
        return this._countGoals / this._countGames;
    }

    set goals(numbGoals) {
        if (typeof(numbGoals) === "number") {
            this._countGoals += numbGoals;
        }
        else {
            throw new Error ("Please, enter a number of goals.");
        }
    }

    get teamStat() {
        return this._name + ": " + this._countGoals + " (" + this.statistics() + " per game)";
    }
}

module.exports = Team;