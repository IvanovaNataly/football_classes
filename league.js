// prints
// Games:
// Barca - Real Madrid: 4 - 0
// Real Madrid - Atletico: 2 - 0
// Barca - Atletico: 1 - 3
// Team Stats:
// Barca: 5 (2.5 per game)
// Real Madrid: 2 (1 per game)
// Atletico: 3 (1.5 per game)

let Team = require("./team.js");

class League {
    constructor() {
        this.gameStat = [];
        this.teams = {};
    }

    play(game) {
        this.gameStat.push(game);
        this.manageTeams(game);
    }

    manageTeams(game) {
        for (let everyTeam in game) {
            let teamName = game[everyTeam].name;
            if (this.teams.hasOwnProperty(teamName)) {
                this.teams[teamName].countGames();
                this.teams[teamName].goals = game[everyTeam].goals;
            } else {
                let newTeam = new Team(teamName);
                newTeam.goals = game[everyTeam].goals;
                this.teams[teamName] = newTeam;
            }
        }  
    }

    getLeageStatistics() {
        let leageStat = "";
        for (let team in this.teams) {
            leageStat += this.getTeamStatistics(this.teams[team]) + " \n";
        }
        return (leageStat);
    }

    getTeamStatistics(team) {
        return team.teamStat;
    }

    toString() {
        let games = "Games: \n" + this.gameStat.map(game => game.result + " \n").join("");
        let gameStat = "Team Stats: \n" + this.getLeageStatistics();
        let output = games + " \n" + gameStat;
        return output;
    }
}

module.exports = League;