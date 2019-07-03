const players = [
  {
    id: 1,
    name: "josh",
    campus: "phoenix",
    role: "PING PONG GOD",
    wins: 0,
    losses: 0
  }
];
let id = 2;
module.exports = {
  cheetahAllPlayers: (req, res, next) => {
    res.status(200).send(players);
  },
  woodpeckerPlayer: (req, res, next) => {
    const { name, campus, role } = req.body;
    players.push({
      id: id,
      name,
      campus,
      role,
      wins: 0,
      losses: 0
    });
    id++;
    res.status(200).send(players);
  },
  beaverDam: (req, res, next) => {
    //   http://localhost:3008/api/beaver/1?match=true
    const idToUpdate = req.params.id;
    // match will be a boolean as string, true if won, false if lost
    const { match } = req.query;
    // find the player index you are trying to update
    const playerIndex = players.findIndex(player => {
      return player.id == idToUpdate;
    });

    // if no player is found send an error message
    if (playerIndex === -1) {
      res.status(404).send("player not found");
    } else {
      // if a player is found, we need to check if the match was true or false indicating a win or a loss
      if (match === "true") {
        //   incremenet wins for true
        players[playerIndex].wins++;
      } else {
        //   increment losses for false
        players[playerIndex].losses++;
      }
      //   send back the total players array
      res.status(200).send(players);
    }
  },
  hungryVulture: (req, res, next) => {}
};
