class Game {
    constructor(nameA, nameB, goalsA, goalsB) {
        this.teamA = {name: nameA, goals: goalsA};
        this.teamB = {name: nameB, goals: goalsB};
    }

    get result() {
        return this.teamA.name + " - " + this.teamB.name + ": " + this.teamA.goals + " - " + this.teamB.goals;
    }

}

module.exports = Game;
