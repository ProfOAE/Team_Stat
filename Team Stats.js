const team = {
    _players: [
      {firstName: 'Leo', 
      lastName: 'Messi',
       age: 33
       }, 
      {firstName: 'Neymar', 
      lastName: 'Junior', 
      age: 29
      },
      {firstName: 'Angel', 
      lastName: 'Dimaria', 
      age: 32
      }
    ],  // end of player array containin three players for now
    _games: [
      {opponent: 'Strabourg',
      teamPoint: 42,
      opponentPoints: 27
      },
      {opponent: 'Lille',
      teamPoint: 42,
      opponentPoints: 32
      },
      {opponent: 'Lyon',
      teamPoint: 42,
      opponentPoints: 30
      }
    ],
  
    get players(){
      return this._players;
    },
    get teams(){
      return this._games;
    },
    addPlayer(firstName, lastName, age){
      const player ={
        fistName: firstName,
        lastName: lastName,
        age: age
      };
      return this._players.push(player);
    },
    addGame(oppName,temPoints,Opp){
      const game = {
        opponent: oppName,
        temPoints: temPoints,
        oppPoints: Opp
      };
      return this._games.push(game);
  },
  };
  team.addPlayer('Steph', 'Curry',28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  //Invoking the addGame method
  
  team.addGame('Barcelona', 56,60);
  team.addGame('Real Madrid',45 ,60);
  team.addGame('Chelsea', 40,60);
  
  const display3Match = team._games[3];
  console.log(display3Match);
  console.log();
  console.log();
  
  for (let name of  team._players){
    console.log(name);
  }
  console.log();
  console.log();
  let players = team.players[0];
  console.log(players);