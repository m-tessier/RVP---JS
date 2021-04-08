class Game {
  constructor(turnNumber, players) {
    const grace = new Fighter (12, 4, 40, "Grace");
    const ulder = new Paladin (16, 3, 160, "Ulder");
    const moana = new Monk (8, 2, 200, "Moana");
    const draven = new Berzerker (8, 4, 0, "Draven");
    const carl = new Assassin (6, 6, 20, "Carl");
    
    this.turnNumber = 1;
    this.players = new Array ();
    this.players.push(grace, ulder, moana, draven, carl)
  }

  newTurn() {
    this.turnNumber += 1;
  }

  finish() {
    if(this.turnNumber === 10 || this.players[0].status == "loser" || this.players[1].status == "loser") {
      console.log('La partie est finie')
    }
  }
}




//console.log(game)
//game.newTurn()
//console.log(game)
//game.newTurn()
//game.newTurn()
//game.newTurn()
//game.finish()
//console.log(game)
//game.newTurn()
//game.newTurn()
//game.newTurn()
//game.newTurn()
//game.newTurn()
//game.newTurn()
//console.log(game)
//game.finish()