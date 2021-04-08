class Turn extends Game {
  constructor(turnNumber, players) {
    super(turnNumber, players);
  }

  startTurn() {
    //document.getElementById('start-turn').innerHTML = `Tour ${this.turnNumber}`
    console.log(`Tour ${this.turnNumber}`)
  }


  watchStats() {
    for(let i = 0; i < 5; i++) {
      document.getElementById(`name-[${i}]`).innerHTML = `${turn.players[i].name}`
      document.getElementById(`hp-[${i}]`).innerHTML = `${turn.players[i].hp}`
      document.getElementById(`dmg-[${i}]`).innerHTML = `${turn.players[i].dmg}`
      document.getElementById(`mana-[${i}]`).innerHTML = `${turn.players[i].mana}`
      document.getElementById(`status-[${i}]`).innerHTML = `${turn.players[i].status}`
    }
  }


  getVictim(player) {
    let victims = this.players.filter(item => item !== player)
    const randomElement = victims[Math.floor(Math.random() * victims.length)];
    return randomElement
  }




  turnPlayer(player) {
    document.getElementById("turn-name").innerHTML = `À ${player.name}`
    console.log(`À ${player.name}`)

    // Player attaque Grace
    let btnGrace = document.getElementById(`grace`);
    btnGrace.addEventListener("click", function() {
      if(player !== turn.players[0] && turn.players[0].status === "player") {

        player.simpleAttack(turn.players[0]);
        document.getElementById("attack").innerHTML = `${player.name} attaque ${turn.players[0].name}, provoque ${player.dmg} dommage. Il reste ${turn.players[0].hp} point de vie à ${turn.players[0].name}.`
        console.log(`${player.name} attaque ${turn.players[0].name}, provoque ${player.dmg} dommage. Il reste ${turn.players[0].hp} point de vie à ${turn.players[0].name}.`);

      } else if(player !== turn.players[0] && turn.players[0].status === "loser") {
        
        document.getElementById("attack").innerHTML = `${turn.players[0].name} est déjà mort(e).`
        console.log(`${turn.players[0].name} est déjà mort(e).`);

      } else {

        document.getElementById("attack").innerHTML = `${player.name} ne peut pas s'attaquer soit même.`
        console.log(`${player.name} ne peut pas s'attaquer soit même.`);
      }
    })

    // Player attaque Ulder
    let btnUlder = document.getElementById(`ulder`);
    btnUlder.addEventListener("click", function() {
      if(player !== turn.players[1] && turn.players[1].status === "player") {

        player.simpleAttack(turn.players[1]);
        document.getElementById("attack").innerHTML = `${player.name} attaque ${turn.players[1].name}, provoque ${player.dmg} dommage. Il reste ${turn.players[1].hp} point de vie à ${turn.players[1].name}.`
        console.log(`${player.name} attaque ${turn.players[1].name}, provoque ${player.dmg} dommage. Il reste ${turn.players[1].hp} point de vie à ${turn.players[1].name}.`);

      } else if(player !== turn.players[1] && turn.players[1].status === "loser") {
        
        document.getElementById("attack").innerHTML = `${turn.players[1].name} est déjà mort(e).`
        console.log(`${turn.players[1].name} est déjà mort(e).`);

      } else {

        document.getElementById("attack").innerHTML = `${player.name} ne peut pas s'attaquer soit même.`
        console.log(`${player.name} ne peut pas s'attaquer soit même.`);
      }
    })
    
    // Player attaque Moana
    let btnMoana = document.getElementById(`moana`);
    btnMoana.addEventListener("click", function() {
      if(player !== turn.players[2] && turn.players[2].status === "player") {

        player.simpleAttack(turn.players[2]);
        document.getElementById("attack").innerHTML = `${player.name} attaque ${turn.players[2].name}, provoque ${player.dmg} dommage. Il reste ${turn.players[2].hp} point de vie à ${turn.players[2].name}.`
        console.log(`${player.name} attaque ${turn.players[2].name}, provoque ${player.dmg} dommage. Il reste ${turn.players[2].hp} point de vie à ${turn.players[2].name}.`);

      } else if(player !== turn.players[2] && turn.players[2].status === "loser") {
        
        document.getElementById("attack").innerHTML = `${turn.players[2].name} est déjà mort(e).`
        console.log(`${turn.players[2].name} est déjà mort(e).`);

      } else {

        document.getElementById("attack").innerHTML = `${player.name} ne peut pas s'attaquer soit même.`
        console.log(`${player.name} ne peut pas s'attaquer soit même.`);
      }
    })

    // Player attaque Draven
    let btnDraven = document.getElementById(`draven`);
    btnDraven.addEventListener("click", function() {
      if(player !== turn.players[3] && turn.players[3].status === "player") {

        player.simpleAttack(turn.players[3]);
        document.getElementById("attack").innerHTML = `${player.name} attaque ${turn.players[3].name}, provoque ${player.dmg} dommage. Il reste ${turn.players[3].hp} point de vie à ${turn.players[3].name}.`
        console.log(`${player.name} attaque ${turn.players[3].name}, provoque ${player.dmg} dommage. Il reste ${turn.players[3].hp} point de vie à ${turn.players[3].name}.`);

      } else if(player !== turn.players[3] && turn.players[3].status === "loser") {
        
        document.getElementById("attack").innerHTML = `${turn.players[3].name} est déjà mort(e).`
        console.log(`${turn.players[3].name} est déjà mort(e).`);

      } else {

        document.getElementById("attack").innerHTML = `${player.name} ne peut pas s'attaquer soit même.`
        console.log(`${player.name} ne peut pas s'attaquer soit même.`);
      }
    })

    // Player attaque Carl
    let btnCarl = document.getElementById(`carl`);
    btnCarl.addEventListener("click", function() {
      if(player !== turn.players[4] && turn.players[4].status === "player") {

        player.simpleAttack(turn.players[4]);
        document.getElementById("attack").innerHTML = `${player.name} attaque ${turn.players[4].name}, provoque ${player.dmg} dommage. Il reste ${turn.players[4].hp} point de vie à ${turn.players[4].name}.`
        console.log(`${player.name} attaque ${turn.players[4].name}, provoque ${player.dmg} dommage. Il reste ${turn.players[4].hp} point de vie à ${turn.players[4].name}.`);

      } else if(player !== turn.players[4] && turn.players[4].status === "loser") {
        
        document.getElementById("attack").innerHTML = `${turn.players[4].name} est déjà mort(e).`
        console.log(`${turn.players[4].name} est déjà mort(e).`);

      } else {

        document.getElementById("attack").innerHTML = `${player.name} ne peut pas s'attaquer soit même.`
        console.log(`${player.name} ne peut pas s'attaquer soit même.`);
      }
    })
  }



  turnPlayer2(player) {

    [...document.getElementsByTagName("a")].forEach(function(item) {
      item.addEventListener('click', function() {
        obj[this.id]();
        if(obj[this.id].name === player.name) {
          console.log('je suis le player')
        }
      })
    })
    
    let obj = {
      grace: function() {
        console.log('grace')
      },
      ulder: function() {
        console.log('ulder')
      },
      moana: function() {
        console.log('moana')
      },
      draven: function() {
        console.log('draven')
      },
      carl: function() {
        console.log('carl')
      }
    }
  }






  playerTurn(player) {
    let playerNumber = this.players.filter(item => item.status === "player").length;

    if(player === turn.players[0] && player.status === "player" && turn.players[1].status === "player") {
      console.log(`Tour de ${player.name}`)
      player.simpleAttack(turn.players[1])
      console.log(`${player.name} attaque ${turn.players[1].name}, provoque ${player.dmg} dommage. Il reste ${turn.players[1].hp} point de vie à ${turn.players[1].name}.`);
      turn.players[1].isLoser();
      if(this.turnNumber === 10 || playerNumber <= 2) {
        console.log('La partie est finie')
      }
    }
    else if(player === turn.players[1] && player.status === "player" && turn.players[2].status === "player") {
      console.log(`À ${player.name}`)
      player.simpleAttack(turn.players[2])
      console.log(`${player.name} attaque ${turn.players[2].name}, provoque ${player.dmg} dommage. Il reste ${turn.players[2].hp} point de vie à ${turn.players[2].name}.`);
      turn.players[2].isLoser();
      if(this.turnNumber === 10 || playerNumber <= 2) {
        console.log('La partie est finie')
      }
    }
    else if(player === turn.players[2] && player.status === "player" && turn.players[3].status === "player") {
      console.log(`À ${player.name}`)
      player.simpleAttack(turn.players[3])
      console.log(`${player.name} attaque ${turn.players[0].name}, provoque ${player.dmg} dommage. Il reste ${turn.players[0].hp} point de vie à ${turn.players[3].name}.`);
      turn.players[3].isLoser();
      if(this.turnNumber === 10 || playerNumber <= 2) {
        console.log('La partie est finie')
      }
    }
    else if(player === turn.players[3] && player.status === "player" && turn.players[4].status === "player") {
      console.log(`À ${player.name}`)
      player.simpleAttack(turn.players[4])
      console.log(`${player.name} attaque ${turn.players[4].name}, provoque ${player.dmg} dommage. Il reste ${turn.players[4].hp} point de vie à ${turn.players[4].name}.`);
      turn.players[4].isLoser();
      if(this.turnNumber === 10 || playerNumber <= 2) {
        console.log('La partie est finie')
      }
    }
    else if(player === turn.players[4] && player.status === "player" && turn.players[0].status === "player") {
      console.log(`À ${player.name}`)
      player.simpleAttack(turn.players[0])
      console.log(`${player.name} attaque ${turn.players[0].name}, provoque ${player.dmg} dommage. Il reste ${turn.players[0].hp} point de vie à ${turn.players[0].name}.`);
      turn.players[0].isLoser();
      if(this.turnNumber === 10 || playerNumber <= 2) {
        console.log('La partie est finie')
      }
    }
  }




  new() {
    console.log('Jeux entre les 5 personnages')
    for(let i = 1; i <= 10; i++) {

      let playerCount = this.players.filter(item => item.status === "player").length
      if(this.turnNumber === 10 || playerCount <= 2) {
        console.log('La partie est finie')
        break
      }

      this.startTurn()

      turn.players.forEach((player) => {
        this.playerTurn(player)
      })

      this.newTurn()
    }
  }

}
const turn = new Turn();