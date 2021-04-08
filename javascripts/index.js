document.getElementById("btn").addEventListener("click", function() {

  const game = new Game();
  turn.new();
  //turn.turnPlayer(turn.players[0]);

  document.getElementById("btn").innerHTML = `Que la nouvelle partie commence !`;

  document.getElementById(`grace`).innerHTML = `Grace`
  document.getElementById(`ulder`).innerHTML = `Ulder`
  document.getElementById(`moana`).innerHTML = `Moana`
  document.getElementById(`draven`).innerHTML = `Draven`
  document.getElementById(`carl`).innerHTML = `Carl`
  
  document.getElementById("check-status").innerHTML = `
    <thead>
      <tr>
        <tr scope="col"></tr>
        <th scope="col">Nom</th>
        <th scope="col">Point de vie</th>
        <th scope="col">Dommage</th>
        <th scope="col">Mana</th>
        <th scope="col">Statut</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" id="name-[0]"></th>
        <td id="hp-[0]"></td>
        <td id="dmg-[0]"></td>
        <td id="mana-[0]"></td>
        <td id="status-[0]"></td>
      </tr>
      <tr>
        <th scope="row" id="name-[1]"></th>
        <td id="hp-[1]"></td>
        <td id="dmg-[1]"></td>
        <td id="mana-[1]"></td>
        <td id="status-[1]"></td>
      </tr>
      <tr>
        <th scope="row"  id="name-[2]"></th>
        <td id="hp-[2]"></td>
        <td id="dmg-[2]"></td>
        <td id="mana-[2]"></td>
        <td id="status-[2]"></td>
      </tr>
      <tr>
        <th scope="row" id="name-[3]"></th>
        <td id="hp-[3]"></td>
        <td id="dmg-[3]"></td>
        <td id="mana-[3]"></td>
        <td id="status-[3]"></td>
      </tr>
      <tr>
        <th scope="row"  id="name-[4]"></th>
        <td  id="hp-[4]"></td>
        <td id="dmg-[4]"></td>
        <td id="mana-[4]"></td>
        <td id="status-[4]"></td>
      </tr>
    </tbody>
  `;
  turn.watchStats()
  


});