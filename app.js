let League = require("./league.js");
let Game = require("./game.js");


let league = new League();
league.play(new Game("Barca", "Real Madrid", 4,0));
league.play(new Game("Real Madrid", "Atletico", 2,0));
league.play(new Game("Barca", "Atletico", 1,3));
console.log(league.toString());