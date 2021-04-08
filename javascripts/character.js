class Character {
  constructor(hp, dmg, mana, name, status) {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.name = name;
    this.status = "player";
  }

  isLoser() {
    if(this.hp <= 0) {
      this.status = "loser"
      console.log(this.name + ' est mort(e)')
    }
  }
  
  simpleAttack(victim) {
    victim.hp -= this.dmg
    if(victim.hp <= 0) {
      this.mana += 20;
    }
  }
}





class Fighter extends Character {
  constructor(hp, dmg, mana, name, status) {
    super(hp, dmg, mana, name, status);
  }
  
  specialAttack(victim) {
    this.mana -= 20
    victim.hp -= 5
    // pendant 1 tour class Fighter perd 2 de dégat à chaque attaque
    victim.isLoser();
    if(victim.hp <= 0) {
      this.mana += 20;
    }
  }
}



class Paladin extends Character {
  constructor(hp, dmg, mana, name, status) {
    super(hp, dmg, mana, name, status);
  }
  
  specialAttack(victim) {
    this.mana -= 40;
    this.hp += 5;
    victim.hp -= 4
    victim.isLoser();
    if(victim.hp <= 0) {
      this.mana += 20;
    }
  }
}



class Monk extends Character {
  constructor(hp, dmg, mana, name, status) {
    super(hp, dmg, mana, name, status);
  }
  
  specialAttack(victim) {
    this.mana -= 25;
    victim.hp += 8
    victim.isLoser();
    if(victim.hp <= 0) {
      this.mana += 20;
    }
  }
}



class Berzerker extends Character {
  constructor(hp, dmg, mana, name, status) {
    super(hp, dmg, mana, name, status);
  }
  
  specialAttack(victim) {
    this.hp -= 1;
    this.dmg += 1;
    victim.hp -= this.dmg;
    victim.isLoser();
    if(victim.hp <= 0) {
      this.mana += 20;
    }
  }
}



class Assassin extends Character {
  constructor(hp, dmg, mana, name, status) {
    super(hp, dmg, mana, name, status);
  }
  
  specialAttack(victim) {
    this.mana -= 20;
    victim.hp -= 7;
    if(victim.hp === 0) {
      // pendant 1 tour Assassin reçoit pas de dommage
    } else {
      this.hp -= 7;
    }
    victim.isLoser();
    this.isLoser();
    if(victim.hp <= 0) {
      this.mana += 20;
    }
  }
}





// TEST //

//console.log('Test fonction areLoser')
//let caract1 = new Character (2, 4, 40, "caract1");
//console.log(caract1);
//caract1['hp'] = 0
//caract1.isLoser();
//console.log(caract1);


//const grace = new Fighter (12, 4, 40, "Grace");
//const ulder = new Paladin (16, 3, 160, "Ulder");
//const moana = new Monk (8, 2, 200, "Moana");
//const draven = new Berzerker (8, 4, 0, "Draven");
//const carl = new Assassin (6, 6, 20, "Carl");


//console.log();
//console.log('Etat des joueurs')
//console.log(grace);
//console.log(ulder);
//console.log(moana);
//console.log(draven);
//console.log(carl);
//
//console.log();
//console.log('Test attaque simple des joueurs')

//console.log('Grace attaque Ulder')
//grace.simpleAttack(ulder);
//console.log(ulder);
//
//console.log('Ulder attaque Moana')
//ulder.simpleAttack(moana);
//console.log(moana);
//
//console.log('Moana attaque Draven')
//moana.simpleAttack(draven);
//console.log(draven);
//
//console.log('Draven attaque Carl')
//draven.simpleAttack(carl);
//console.log(carl);
//
//console.log('Carl attaque Garce')
//carl.simpleAttack(grace);
//console.log(grace);
//
//
//
//console.log();
//console.log('Test attaque spéciale des joueurs')
//
//console.log('Grace attaque Ulder')
//grace.specialAttack(ulder)
//console.log(ulder);
//console.log(grace);
//
//console.log('Ulder attaque Moana')
//ulder.specialAttack(moana);
//console.log(moana);
//console.log(ulder);
//
//console.log('Moana attaque Draven')
//moana.specialAttack(draven);
//console.log(draven);
//console.log(moana);
//
//console.log('Draven attaque Carl')
//draven.specialAttack(carl);
//console.log(carl);
//console.log(draven);
//
//console.log('Carl attaque Garce')
//carl.specialAttack(grace);
//console.log(grace);
//console.log(carl);